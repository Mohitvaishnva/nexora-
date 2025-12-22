import React, { useState } from 'react';
import { database } from '../config/firebase';
import { ref, query, orderByChild, equalTo, get } from 'firebase/database';
import './StatusPage.css';

interface Order {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    items: Array<{ name: string; quantity: number; price: string }>;
    totalAmount: number;
    orderDate: number;
    status: string;
    paymentStatus: string;
    paymentMethod: string;
}

interface RepairRequest {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    deviceType: string;
    brand: string;
    model: string;
    issueDescription: string;
    status: string;
    createdAt: number;
    serviceType: string;
    urgency: string;
}

const StatusPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'orders' | 'repairs'>('orders');
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [orders, setOrders] = useState<Order[]>([]);
    const [repairs, setRepairs] = useState<RepairRequest[]>([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!searchQuery.trim()) {
            setError('Please enter your phone number or email');
            return;
        }

        setIsLoading(true);
        setError('');
        setHasSearched(true);

        try {
            // Determine if search is phone or email
            const isEmail = searchQuery.includes('@');
            const searchField = isEmail ? 'email' : 'phone';
            const searchValue = searchQuery.trim();

            // Search orders
            const ordersRef = ref(database, 'orders');
            const ordersQuery = query(ordersRef, orderByChild(searchField), equalTo(searchValue));
            const ordersSnapshot = await get(ordersQuery);

            const ordersData: Order[] = [];
            if (ordersSnapshot.exists()) {
                ordersSnapshot.forEach((child) => {
                    ordersData.push({
                        id: child.key || '',
                        ...child.val()
                    });
                });
            }
            // Sort by date, newest first
            ordersData.sort((a, b) => b.orderDate - a.orderDate);
            setOrders(ordersData);

            // Search repair requests
            const repairsRef = ref(database, 'repairRequests');
            const repairsQuery = query(repairsRef, orderByChild(searchField), equalTo(searchValue));
            const repairsSnapshot = await get(repairsQuery);

            const repairsData: RepairRequest[] = [];
            if (repairsSnapshot.exists()) {
                repairsSnapshot.forEach((child) => {
                    repairsData.push({
                        id: child.key || '',
                        ...child.val()
                    });
                });
            }
            // Sort by date, newest first
            repairsData.sort((a, b) => b.createdAt - a.createdAt);
            setRepairs(repairsData);

        } catch (err: any) {
            console.error('Error searching:', err);
            setError('Failed to search. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const getStatusBadgeClass = (status: string) => {
        switch (status?.toLowerCase()) {
            case 'pending':
            case 'new':
                return 'status-badge status-pending';
            case 'processing':
            case 'in-progress':
            case 'diagnosed':
                return 'status-badge status-processing';
            case 'completed':
            case 'delivered':
            case 'repaired':
                return 'status-badge status-completed';
            case 'cancelled':
            case 'rejected':
                return 'status-badge status-cancelled';
            default:
                return 'status-badge status-pending';
        }
    };

    const formatDate = (timestamp: number) => {
        return new Date(timestamp).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    return (
        <main className="status-page">
            <section className="status-hero">
                <div className="container">
                    <h1>Track Your Status</h1>
                    <p className="subtitle">Check the status of your orders and repair requests</p>
                </div>
            </section>

            <section className="status-content">
                <div className="container">
                    {/* Search Form */}
                    <div className="search-section">
                        <form onSubmit={handleSearch} className="search-form">
                            <div className="search-input-wrapper">
                                <input
                                    type="text"
                                    placeholder="Enter your phone number or email"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="search-input"
                                />
                                <button type="submit" className="btn btn-primary search-btn" disabled={isLoading}>
                                    {isLoading ? 'Searching...' : 'Search'}
                                </button>
                            </div>
                            {error && <p className="error-message">{error}</p>}
                        </form>
                    </div>

                    {/* Tabs */}
                    <div className="tabs-container">
                        <div className="tabs">
                            <button
                                className={`tab ${activeTab === 'orders' ? 'active' : ''}`}
                                onClick={() => setActiveTab('orders')}
                            >
                                <span className="tab-icon">📦</span>
                                Order Status
                                {orders.length > 0 && <span className="tab-count">{orders.length}</span>}
                            </button>
                            <button
                                className={`tab ${activeTab === 'repairs' ? 'active' : ''}`}
                                onClick={() => setActiveTab('repairs')}
                            >
                                <span className="tab-icon">🔧</span>
                                Repair Status
                                {repairs.length > 0 && <span className="tab-count">{repairs.length}</span>}
                            </button>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="results-section">
                        {!hasSearched ? (
                            <div className="empty-state">
                                <div className="empty-icon">🔍</div>
                                <h3>Search for your orders or repairs</h3>
                                <p>Enter your phone number or email address to view your order and repair statuses</p>
                            </div>
                        ) : isLoading ? (
                            <div className="loading-state">
                                <div className="spinner"></div>
                                <p>Searching...</p>
                            </div>
                        ) : activeTab === 'orders' ? (
                            orders.length === 0 ? (
                                <div className="empty-state">
                                    <div className="empty-icon">📦</div>
                                    <h3>No orders found</h3>
                                    <p>We couldn't find any orders with this phone number or email</p>
                                </div>
                            ) : (
                                <div className="cards-grid">
                                    {orders.map((order) => (
                                        <div key={order.id} className="status-card order-card">
                                            <div className="card-header">
                                                <div className="card-id">
                                                    <span className="label">Order ID</span>
                                                    <span className="value">#{order.id.slice(-8).toUpperCase()}</span>
                                                </div>
                                                <span className={getStatusBadgeClass(order.status)}>
                                                    {order.status}
                                                </span>
                                            </div>
                                            <div className="card-body">
                                                <div className="card-info">
                                                    <div className="info-row">
                                                        <span className="info-label">Date</span>
                                                        <span className="info-value">{formatDate(order.orderDate)}</span>
                                                    </div>
                                                    <div className="info-row">
                                                        <span className="info-label">Items</span>
                                                        <span className="info-value">{order.items?.length || 0} item(s)</span>
                                                    </div>
                                                    <div className="info-row">
                                                        <span className="info-label">Total</span>
                                                        <span className="info-value highlight">{formatPrice(order.totalAmount)}</span>
                                                    </div>
                                                    <div className="info-row">
                                                        <span className="info-label">Payment</span>
                                                        <span className="info-value">
                                                            {order.paymentMethod?.toUpperCase()} -
                                                            <span className={`payment-status ${order.paymentStatus}`}>
                                                                {order.paymentStatus}
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="items-list">
                                                    <span className="items-label">Products:</span>
                                                    <ul>
                                                        {order.items?.map((item, idx) => (
                                                            <li key={idx}>{item.name} × {item.quantity}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )
                        ) : (
                            repairs.length === 0 ? (
                                <div className="empty-state">
                                    <div className="empty-icon">🔧</div>
                                    <h3>No repair requests found</h3>
                                    <p>We couldn't find any repair requests with this phone number or email</p>
                                </div>
                            ) : (
                                <div className="cards-grid">
                                    {repairs.map((repair) => (
                                        <div key={repair.id} className="status-card repair-card">
                                            <div className="card-header">
                                                <div className="card-id">
                                                    <span className="label">Ticket ID</span>
                                                    <span className="value">#{repair.id.slice(-8).toUpperCase()}</span>
                                                </div>
                                                <span className={getStatusBadgeClass(repair.status)}>
                                                    {repair.status}
                                                </span>
                                            </div>
                                            <div className="card-body">
                                                <div className="card-info">
                                                    <div className="info-row">
                                                        <span className="info-label">Date</span>
                                                        <span className="info-value">{formatDate(repair.createdAt)}</span>
                                                    </div>
                                                    <div className="info-row">
                                                        <span className="info-label">Device</span>
                                                        <span className="info-value">{repair.brand} {repair.model}</span>
                                                    </div>
                                                    <div className="info-row">
                                                        <span className="info-label">Type</span>
                                                        <span className="info-value">{repair.deviceType}</span>
                                                    </div>
                                                    <div className="info-row">
                                                        <span className="info-label">Service</span>
                                                        <span className="info-value">{repair.serviceType}</span>
                                                    </div>
                                                    <div className="info-row">
                                                        <span className="info-label">Urgency</span>
                                                        <span className={`info-value urgency-${repair.urgency?.toLowerCase()}`}>
                                                            {repair.urgency}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="issue-description">
                                                    <span className="issue-label">Issue:</span>
                                                    <p>{repair.issueDescription}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default StatusPage;

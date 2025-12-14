export interface Product {
  id: string;
  name: string;
  category: 'laptop' | 'desktop' | 'printer';
  description: string;
  price: string;
  features?: string[];
  specifications?: Record<string, string>;
  images?: string[];
  stock?: number;
  visible?: boolean;
  tags?: string[];
  createdAt: number;
  updatedAt: number;
}

export type ProductCategory = 'all' | 'laptop' | 'desktop' | 'printer';

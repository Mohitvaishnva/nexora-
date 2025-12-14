# Firebase Setup Guide

## Step 1: Configure Database Rules

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: **nexora-a6478**
3. Click **Realtime Database** in the left sidebar
4. Click the **Rules** tab
5. Replace the existing rules with:

```json
{
  "rules": {
    "products": {
      ".read": true,
      ".write": "auth != null"
    },
    "repairRequests": {
      ".read": "auth != null",
      ".write": true
    },
    "contactInquiries": {
      ".read": "auth != null",
      ".write": true
    },
    "orders": {
      ".read": "auth != null",
      ".write": true
    }
  }
}
```

6. Click **Publish**

## Step 2: Add Sample Products

### Option A: Manual Entry in Firebase Console

1. In Firebase Console → Realtime Database
2. Click the **Data** tab
3. Click the **+** icon next to your database URL
4. Enter `products` as the name
5. Click **+** to add a child
6. Copy and paste this JSON structure:

```json
{
  "-product1": {
    "name": "HP Pavilion 15",
    "category": "laptop",
    "description": "Perfect for everyday computing and entertainment",
    "price": "₹45,000",
    "features": ["Intel Core i5", "8GB RAM", "512GB SSD", "15.6\" Full HD"],
    "specifications": {
      "processor": "Intel Core i5-12450H",
      "ram": "8GB DDR4",
      "storage": "512GB SSD",
      "display": "15.6\" Full HD",
      "graphics": "Intel UHD Graphics"
    },
    "images": ["https://via.placeholder.com/400x300?text=HP+Pavilion+15"],
    "stock": 10,
    "visible": true,
    "createdAt": 1733702400000,
    "updatedAt": 1733702400000
  },
  "-product2": {
    "name": "HP EliteDesk 800",
    "category": "desktop",
    "description": "Professional desktop for business environments",
    "price": "₹55,000",
    "features": ["Intel Core i7", "16GB RAM", "1TB HDD + 256GB SSD", "Windows 11 Pro"],
    "specifications": {
      "processor": "Intel Core i7-13700",
      "ram": "16GB DDR4",
      "storage": "1TB HDD + 256GB SSD",
      "graphics": "Intel UHD Graphics 770",
      "os": "Windows 11 Pro"
    },
    "images": ["https://via.placeholder.com/400x300?text=HP+EliteDesk+800"],
    "stock": 5,
    "visible": true,
    "createdAt": 1733702400000,
    "updatedAt": 1733702400000
  },
  "-product3": {
    "name": "HP LaserJet Pro M404dn",
    "category": "printer",
    "description": "Fast, reliable black-and-white laser printing",
    "price": "₹18,000",
    "features": ["Fast Printing", "Duplex Printing", "Network Ready", "Low Cost per Page"],
    "specifications": {
      "printSpeed": "Up to 40 ppm",
      "printResolution": "1200 x 1200 dpi",
      "paperCapacity": "350 sheets",
      "connectivity": "Ethernet, USB",
      "monthlyDuty": "80,000 pages"
    },
    "images": ["https://via.placeholder.com/400x300?text=HP+LaserJet+M404dn"],
    "stock": 8,
    "visible": true,
    "createdAt": 1733702400000,
    "updatedAt": 1733702400000
  }
}
```

### Option B: Import JSON File

1. Create a file `sample-products.json` with the above JSON
2. In Firebase Console → Realtime Database → Data tab
3. Click the **⋮** menu (three dots)
4. Select **Import JSON**
5. Choose your `sample-products.json` file

## Step 3: Verify Setup

1. Open your app: http://localhost:5175/store
2. Open browser DevTools (F12)
3. Go to **Console** tab
4. Check for these logs:
   - `Firebase products data:` - Should show your products object
   - `Filtered products:` - Should show array of visible products
   - If you see "No products found in Firebase database" - Products not added yet
   - If you see "PERMISSION_DENIED" - Database rules need updating

## Step 4: Test Product Display

Once products are added:
- Visit `/store` page
- You should see products listed
- Try category filters (All Products, Laptops, Desktops, Printers)
- Check that product count is displayed correctly

## Troubleshooting

### Products still not showing?

1. **Check Database Rules**: Make sure `.read: true` is set for products
2. **Check Console Logs**: Open DevTools → Console for error messages
3. **Verify Product Structure**: Each product must have `visible: true`
4. **Check Firebase Connection**: Look for connection errors in console

### Form submissions failing?

1. **Set write permissions**: 
   ```json
   "repairRequests": {".write": true}
   "contactInquiries": {".write": true}
   ```
2. **Test a form**: Fill out repair or contact form
3. **Check Firebase Console**: Go to Data tab → repairRequests/contactInquiries
4. **Verify timestamp**: New entries should have createdAt timestamp

## Next Steps

After basic setup:
1. Build admin panel for managing products
2. Add authentication for admin access
3. Implement product image upload
4. Add product search functionality
5. Create order management system

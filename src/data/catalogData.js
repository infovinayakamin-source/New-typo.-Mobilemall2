/**
 * MOBILE MALL - B2B Wholesale Digital Catalogue
 * Flagship Smartphones, High-Volume Drivers, Tablets & iPads, Grade A+ Certified Lots
 */

export const brandList = [
  { id: 'all', name: 'All Brands', count: 18 },
  { id: 'apple', name: 'Apple', count: 6, logoText: ' Apple' },
  { id: 'samsung', name: 'Samsung', count: 4, logoText: 'SAMSUNG' },
  { id: 'oneplus', name: 'OnePlus', count: 2, logoText: 'ONEPLUS' },
  { id: 'xiaomi', name: 'Xiaomi / Redmi', count: 2, logoText: 'XIAOMI' },
  { id: 'vivo', name: 'Vivo', count: 2, logoText: 'VIVO' },
  { id: 'oppo', name: 'Oppo', count: 2, logoText: 'OPPO' },
];

export const categoryList = [
  { id: 'all', label: 'Complete Wholesale Inventory' },
  { id: 'flagship', label: 'Flagship Smartphones' },
  { id: 'tablets', label: 'Tablets & iPads' },
  { id: 'volume', label: 'High-Volume Retail Runners' },
  { id: 'certified', label: 'Grade A+ Certified Lots' },
];

export const catalogProducts = [
  // --- APPLE FLAGSHIPS & TABLETS ---
  {
    id: 'mm-apple-16pm',
    name: 'Apple iPhone 16 Pro Max',
    tagline: 'Titanium Grade 5 • Apple A18 Pro Bionic',
    brand: 'apple',
    category: 'flagship',
    condition: 'Brand New Sealed',
    storage: '256GB / 512GB / 1TB',
    colors: ['Desert Titanium', 'Natural Titanium', 'White Titanium', 'Black Titanium'],
    moq: 5,
    masterCartonSize: 20,
    tier1Price: 1099, // MOQ 5-24 pcs
    tier2Price: 1049, // 25-99 pcs
    tier3Price: 999,  // 100+ pcs
    suggestedMSRP: 1199,
    stockStatus: 'In Stock - Same Day Dispatch',
    stockCount: 64,
    warranty: '1 Year Official Apple Global Limited Warranty',
    specs: {
      display: '6.9" Super Retina XDR OLED (120Hz ProMotion)',
      processor: 'Apple A18 Pro (3nm architecture)',
      camera: '48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto',
      battery: '4685 mAh (Up to 33 hrs video playback)',
      connectivity: '5G Sub-6 & mmWave, Wi-Fi 7, USB-C 3.2 Gen 2',
      imeiStatus: 'Original Clean IMEI, Factory Unlocked (Physical SIM + eSIM / Dual eSIM)'
    },
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    badges: ['Top Dealer Bestseller', 'Clean IMEI Guaranteed']
  },
  {
    id: 'mm-apple-16',
    name: 'Apple iPhone 16',
    tagline: 'Aerospace-Grade Aluminum • Camera Control Button',
    brand: 'apple',
    category: 'flagship',
    condition: 'Brand New Sealed',
    storage: '128GB / 256GB',
    colors: ['Ultramarine', 'Teal', 'Pink', 'White', 'Black'],
    moq: 5,
    masterCartonSize: 20,
    tier1Price: 729,
    tier2Price: 695,
    tier3Price: 669,
    suggestedMSRP: 799,
    stockStatus: 'In Stock - Ready for Freight',
    stockCount: 88,
    warranty: '1 Year Official Apple Warranty',
    specs: {
      display: '6.1" Super Retina XDR OLED Display',
      processor: 'Apple A18 Chip with 5-core GPU',
      camera: '48MP Fusion 2x Telephoto + 12MP Ultra-Wide',
      battery: '3561 mAh (Fast MagSafe Charging)',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, USB-C',
      imeiStatus: 'Factory Unlocked, Retail Sealed'
    },
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80',
    badges: ['High Retail Velocity']
  },
  {
    id: 'mm-apple-ipad-pro-m4',
    name: 'Apple iPad Pro 13" & 11" (M4)',
    tagline: 'Ultra Retina XDR Tandem OLED • Pro Performance',
    brand: 'apple',
    category: 'tablets',
    condition: 'Brand New Sealed',
    storage: '256GB / 512GB (Wi-Fi + Cellular)',
    colors: ['Space Black', 'Silver'],
    moq: 3,
    masterCartonSize: 10,
    tier1Price: 1149,
    tier2Price: 1099,
    tier3Price: 1049,
    suggestedMSRP: 1299,
    stockStatus: 'In Stock - Immediate Dispatch',
    stockCount: 32,
    warranty: '1 Year Apple Official Worldwide Warranty',
    specs: {
      display: 'Ultra Retina XDR Tandem OLED, 1600 nits peak',
      processor: 'Apple M4 chip (9-core/10-core CPU)',
      camera: '12MP Wide back camera with LiDAR scanner',
      battery: '10-hour all-day battery life (USB-C Thunderbolt / USB 4)',
      connectivity: '5G Gigabit LTE, Wi-Fi 6E, Apple Pencil Pro support',
      imeiStatus: 'Official Factory Boxed'
    },
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
    badges: ['Enterprise & Creative Favourite']
  },
  {
    id: 'mm-apple-ipad-10',
    name: 'Apple iPad 10th Generation 10.9"',
    tagline: 'All-Screen Liquid Retina • High Turnover Retail Asset',
    brand: 'apple',
    category: 'tablets',
    condition: 'Brand New Sealed',
    storage: '64GB / 256GB (Wi-Fi & LTE)',
    colors: ['Blue', 'Pink', 'Yellow', 'Silver'],
    moq: 5,
    masterCartonSize: 15,
    tier1Price: 319,
    tier2Price: 299,
    tier3Price: 285,
    suggestedMSRP: 349,
    stockStatus: 'High Demand - Rapid Dispatch',
    stockCount: 140,
    warranty: '1 Year Apple Official Warranty',
    specs: {
      display: '10.9" Liquid Retina display (2360 x 1640)',
      processor: 'A14 Bionic chip with Neural Engine',
      camera: 'Landscape 12MP Ultra Wide with Center Stage',
      battery: '28.6 watt-hour rechargeable battery',
      connectivity: 'Wi-Fi 6, Optional 5G Cellular, USB-C',
      imeiStatus: 'Clean IMEI & Serial Validation'
    },
    image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=800&q=80',
    badges: ['#1 Educational & Retail Volume Leader']
  },
  {
    id: 'mm-apple-ipad-air-m2',
    name: 'Apple iPad Air 11" & 13" (M2)',
    tagline: 'Supercharged by Apple M2 • Liquid Retina Display',
    brand: 'apple',
    category: 'tablets',
    condition: 'Brand New Sealed',
    storage: '128GB / 256GB',
    colors: ['Space Gray', 'Starlight', 'Purple', 'Blue'],
    moq: 5,
    masterCartonSize: 15,
    tier1Price: 539,
    tier2Price: 510,
    tier3Price: 489,
    suggestedMSRP: 599,
    stockStatus: 'In Stock - Ready to Ship',
    stockCount: 45,
    warranty: '1 Year Apple Official Warranty',
    specs: {
      display: 'Liquid Retina display with P3 wide color',
      processor: 'Apple M2 chip with 8-core CPU, 10-core GPU',
      camera: '12MP Wide front and back cameras',
      battery: 'Up to 10 hours of surfing web on Wi-Fi',
      connectivity: 'Wi-Fi 6E, USB-C connector with DisplayPort',
      imeiStatus: 'Sealed Master Cartons'
    },
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80',
    badges: ['Premium Prosumer Asset']
  },

  // --- SAMSUNG FLAGSHIPS & TABLETS ---
  {
    id: 'mm-samsung-s24u',
    name: 'Samsung Galaxy S24 Ultra 5G',
    tagline: 'Titanium Armor Frame • Galaxy AI • 200MP Quad Tele',
    brand: 'samsung',
    category: 'flagship',
    condition: 'Brand New Sealed',
    storage: '256GB / 512GB / 1TB',
    colors: ['Titanium Gray', 'Titanium Black', 'Titanium Violet', 'Titanium Yellow'],
    moq: 5,
    masterCartonSize: 20,
    tier1Price: 949,
    tier2Price: 909,
    tier3Price: 875,
    suggestedMSRP: 1099,
    stockStatus: 'In Stock - Dispatch Today',
    stockCount: 52,
    warranty: '1 Year Samsung Authorized Service Center Warranty',
    specs: {
      display: '6.8" Dynamic AMOLED 2X, 1-120Hz, 2600 nits, Gorilla Armor',
      processor: 'Snapdragon 8 Gen 3 for Galaxy (4nm)',
      camera: '200MP Wide + 50MP 5x Periscope + 10MP 3x + 12MP Ultra-Wide',
      battery: '5000 mAh (45W Fast Charging + Wireless)',
      connectivity: 'Dual SIM + eSIM, 5G SA/NSA, Wi-Fi 7, S-Pen embedded',
      imeiStatus: 'Genuine Indian & Global Non-Carrier Variants'
    },
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
    badges: ['Top Enterprise Seller', 'High Profit Margin']
  },
  {
    id: 'mm-samsung-zfold6',
    name: 'Samsung Galaxy Z Fold6 5G',
    tagline: 'Ultra-Slim Dual Screen • Galaxy AI Productivity Hub',
    brand: 'samsung',
    category: 'flagship',
    condition: 'Brand New Sealed',
    storage: '256GB / 512GB',
    colors: ['Silver Shadow', 'Navy', 'Pink'],
    moq: 3,
    masterCartonSize: 10,
    tier1Price: 1420,
    tier2Price: 1360,
    tier3Price: 1299,
    suggestedMSRP: 1599,
    stockStatus: 'Limited Stock - 14 Units Left',
    stockCount: 14,
    warranty: '1 Year Samsung Official Warranty with Screen Protection Option',
    specs: {
      display: '7.6" Main Dynamic AMOLED 2X + 6.3" Cover AMOLED (120Hz)',
      processor: 'Snapdragon 8 Gen 3 for Galaxy',
      camera: '50MP Triple ProVisual Engine',
      battery: '4400 mAh Dual Intelligent Battery',
      connectivity: '5G Dual SIM, IP48 Water Resistance, S Pen Support',
      imeiStatus: 'Brand Sealed Master Lots'
    },
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
    badges: ['Luxury Foldable Prestige']
  },
  {
    id: 'mm-samsung-a55',
    name: 'Samsung Galaxy A55 5G',
    tagline: 'Metal Frame • Super AMOLED • High-Turnover Volume Bestseller',
    brand: 'samsung',
    category: 'volume',
    condition: 'Brand New Sealed',
    storage: '128GB / 256GB (8GB RAM / 12GB RAM)',
    colors: ['Awesome Iceblue', 'Awesome Navy', 'Awesome Lilac'],
    moq: 10,
    masterCartonSize: 20,
    tier1Price: 329,
    tier2Price: 309,
    tier3Price: 289,
    suggestedMSRP: 379,
    stockStatus: 'In Stock - High Volume Dispatch',
    stockCount: 160,
    warranty: '1 Year Samsung Brand Warranty',
    specs: {
      display: '6.6" FHD+ Super AMOLED 120Hz Display, Gorilla Glass Victus+',
      processor: 'Exynos 1480 (4nm) with AMD Xclipse 530 GPU',
      camera: '50MP OIS Main + 12MP Ultra-Wide + 5MP Macro',
      battery: '5000 mAh (25W Fast Charge)',
      connectivity: '5G, IP67 Dust/Water Resistant, Knox Security Vault',
      imeiStatus: 'Indian Open Market Dual SIM'
    },
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    badges: ['Highest Retail Sales Velocity', 'Retailer Essential']
  },
  {
    id: 'mm-samsung-tab-s9',
    name: 'Samsung Galaxy Tab S9 11" 5G',
    tagline: 'Dynamic AMOLED 2X • IP68 Water-Resistant • S-Pen Included',
    brand: 'samsung',
    category: 'tablets',
    condition: 'Brand New Sealed',
    storage: '128GB / 256GB',
    colors: ['Graphite', 'Beige'],
    moq: 5,
    masterCartonSize: 10,
    tier1Price: 599,
    tier2Price: 569,
    tier3Price: 539,
    suggestedMSRP: 699,
    stockStatus: 'In Stock - Dispatch Today',
    stockCount: 38,
    warranty: '1 Year Samsung Regional Warranty',
    specs: {
      display: '11.0" Dynamic AMOLED 2X 120Hz (HDR10+)',
      processor: 'Snapdragon 8 Gen 2 for Galaxy',
      camera: '13MP Main + 12MP Ultra-Wide Selfie',
      battery: '8400 mAh (45W Fast Charging)',
      connectivity: '5G Sub-6, Wi-Fi 6E, Quad AKG Speakers',
      imeiStatus: 'Factory Sealed Packets'
    },
    image: 'https://images.unsplash.com/photo-1527698266440-12104e498b76?auto=format&fit=crop&w=800&q=80',
    badges: ['Commercial Tablet Benchmark']
  },

  // --- ONEPLUS ---
  {
    id: 'mm-oneplus-12',
    name: 'OnePlus 12 5G',
    tagline: 'Snapdragon 8 Gen 3 • 4th Gen Hasselblad Camera • 100W SuperVOOC',
    brand: 'oneplus',
    category: 'flagship',
    condition: 'Brand New Sealed',
    storage: '256GB / 512GB (12GB / 16GB RAM)',
    colors: ['Flowy Emerald', 'Silky Black'],
    moq: 5,
    masterCartonSize: 20,
    tier1Price: 639,
    tier2Price: 609,
    tier3Price: 585,
    suggestedMSRP: 699,
    stockStatus: 'In Stock - Ready to Ship',
    stockCount: 42,
    warranty: '1 Year OnePlus Official Warranty',
    specs: {
      display: '6.82" 2K 120Hz ProXDR with Aqua Touch',
      processor: 'Qualcomm Snapdragon 8 Gen 3',
      camera: '50MP Sony LYT-808 + 64MP 3x Periscope + 48MP Ultra-Wide',
      battery: '5400 mAh (100W Wired + 50W AIRVOOC)',
      connectivity: '5G Dual SIM, Wi-Fi 7, IR Blaster',
      imeiStatus: 'Original Indian / Global Spec Units'
    },
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    badges: ['High Resale Demand', 'Fastest Charging Flagship']
  },
  {
    id: 'mm-oneplus-nord-ce4',
    name: 'OnePlus Nord CE 4 5G',
    tagline: 'Snapdragon 7 Gen 3 • 100W SUPERVOOC • Mass Retail Driver',
    brand: 'oneplus',
    category: 'volume',
    condition: 'Brand New Sealed',
    storage: '128GB / 256GB (8GB RAM)',
    colors: ['Celadon Marble', 'Dark Chrome'],
    moq: 10,
    masterCartonSize: 20,
    tier1Price: 245,
    tier2Price: 232,
    tier3Price: 220,
    suggestedMSRP: 279,
    stockStatus: 'In Stock - High Volume Dispatch',
    stockCount: 190,
    warranty: '1 Year OnePlus Brand Warranty',
    specs: {
      display: '6.7" 120Hz FHD+ AMOLED Display',
      processor: 'Snapdragon 7 Gen 3 (4nm)',
      camera: '50MP Sony LYT-600 with OIS',
      battery: '5500 mAh (100W SuperVOOC in box)',
      connectivity: '5G Dual SIM, Expandable Storage up to 1TB',
      imeiStatus: 'Retail Sealed Lot'
    },
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
    badges: ['Sub-Distributor Fast Runner']
  },

  // --- XIAOMI / REDMI ---
  {
    id: 'mm-xiaomi-14-ultra',
    name: 'Xiaomi 14 Ultra 5G',
    tagline: 'Leica Quad Optical System • 1-inch Variable Aperture',
    brand: 'xiaomi',
    category: 'flagship',
    condition: 'Brand New Sealed',
    storage: '512GB (16GB RAM)',
    colors: ['Black Vegan Leather', 'White Vegan Leather'],
    moq: 3,
    masterCartonSize: 10,
    tier1Price: 999,
    tier2Price: 949,
    tier3Price: 899,
    suggestedMSRP: 1149,
    stockStatus: 'Limited Stock - 8 Units Left',
    stockCount: 8,
    warranty: '1 Year Xiaomi Official Service Warranty',
    specs: {
      display: '6.73" WQHD+ 120Hz LTPO AMOLED, 3000 nits',
      processor: 'Snapdragon 8 Gen 3',
      camera: 'Quad 50MP Leica Cameras (1" LYT-900 sensor)',
      battery: '5000 mAh (90W HyperCharge + 80W Wireless)',
      connectivity: '5G, Wi-Fi 7, Xiaomi Shield Glass',
      imeiStatus: 'Brand Sealed Master Boxes'
    },
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
    badges: ['Pro Photography Flagship']
  },
  {
    id: 'mm-redmi-note13pro',
    name: 'Redmi Note 13 Pro+ 5G',
    tagline: '200MP OIS Camera • 120W HyperCharge • Curved 1.5K AMOLED',
    brand: 'xiaomi',
    category: 'volume',
    condition: 'Brand New Sealed',
    storage: '256GB / 512GB (8GB / 12GB RAM)',
    colors: ['Fusion Purple', 'Fusion Black', 'Fusion White'],
    moq: 10,
    masterCartonSize: 20,
    tier1Price: 285,
    tier2Price: 269,
    tier3Price: 252,
    suggestedMSRP: 329,
    stockStatus: 'In Stock - High Turnover Batch',
    stockCount: 175,
    warranty: '1 Year Xiaomi/Redmi Authorized Warranty',
    specs: {
      display: '6.67" 1.5K 120Hz Curved CrystalRes AMOLED',
      processor: 'MediaTek Dimensity 7200-Ultra (4nm)',
      camera: '200MP Samsung ISOCELL HP3 with OIS',
      battery: '5000 mAh (120W HyperCharge, 0 to 100% in 19 mins)',
      connectivity: '5G, IP68 Water & Dust Resistant',
      imeiStatus: 'Direct Distributor Stock'
    },
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    badges: ['Top Volume Bestseller']
  },

  // --- VIVO ---
  {
    id: 'mm-vivo-x100-pro',
    name: 'Vivo X100 Pro 5G',
    tagline: 'ZEISS APO Telephoto • Dimensity 9300 • V3 Imaging Chip',
    brand: 'vivo',
    category: 'flagship',
    condition: 'Brand New Sealed',
    storage: '512GB (16GB RAM)',
    colors: ['Asteroid Black', 'Sunset Orange'],
    moq: 3,
    masterCartonSize: 10,
    tier1Price: 849,
    tier2Price: 809,
    tier3Price: 775,
    suggestedMSRP: 949,
    stockStatus: 'In Stock - Ready for Freight',
    stockCount: 22,
    warranty: '1 Year Vivo Official Brand Warranty',
    specs: {
      display: '6.78" 1.5K LTPO AMOLED 120Hz, 3000 nits',
      processor: 'MediaTek Dimensity 9300 (All-Big-Core 4nm)',
      camera: '50MP 1-inch Sony IMX989 + 50MP ZEISS APO + 50MP Ultra-Wide',
      battery: '5400 mAh (100W FlashCharge + 50W Wireless)',
      connectivity: '5G Dual SIM, IP68 Water/Dust Proof',
      imeiStatus: 'Official Factory Sealed Units'
    },
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    badges: ['ZEISS Optical Excellence']
  },
  {
    id: 'mm-vivo-v40-pro',
    name: 'Vivo V40 Pro 5G',
    tagline: 'ZEISS Multifocal Portrait • 5500 mAh Slim Form Factor',
    brand: 'vivo',
    category: 'volume',
    condition: 'Brand New Sealed',
    storage: '256GB / 512GB (8GB / 12GB RAM)',
    colors: ['Ganges Blue', 'Titanium Grey'],
    moq: 10,
    masterCartonSize: 20,
    tier1Price: 439,
    tier2Price: 419,
    tier3Price: 399,
    suggestedMSRP: 499,
    stockStatus: 'In Stock - High Retail Velocity',
    stockCount: 80,
    warranty: '1 Year Vivo Brand Warranty',
    specs: {
      display: '6.78" 1.5K 3D Curved AMOLED 120Hz',
      processor: 'MediaTek Dimensity 9200+',
      camera: '50MP Sony IMX921 with OIS + 50MP Sony IMX816 Telephoto',
      battery: '5500 mAh BlueVolt Battery (80W FlashCharge)',
      connectivity: '5G, IP68 & IP69 Dust and Water Resistance',
      imeiStatus: 'Distributor Sealed Lots'
    },
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
    badges: ['High Retailer Margin']
  },

  // --- OPPO ---
  {
    id: 'mm-oppo-reno12-pro',
    name: 'Oppo Reno 12 Pro 5G',
    tagline: 'GenAI Portrait Studio • Quad-Curved Infinite View',
    brand: 'oppo',
    category: 'volume',
    condition: 'Brand New Sealed',
    storage: '256GB / 512GB (12GB RAM)',
    colors: ['Sunset Gold', 'Space Brown'],
    moq: 10,
    masterCartonSize: 20,
    tier1Price: 379,
    tier2Price: 359,
    tier3Price: 339,
    suggestedMSRP: 439,
    stockStatus: 'In Stock - Same Day Dispatch',
    stockCount: 95,
    warranty: '1 Year Oppo Official Warranty',
    specs: {
      display: '6.7" Quad-Curved Flexible AMOLED 120Hz, Gorilla Glass Victus 2',
      processor: 'MediaTek Dimensity 7300-Energy (4nm)',
      camera: '50MP Sony LYT-600 OIS + 50MP Telephoto Portrait',
      battery: '5000 mAh (80W SUPERVOOC Flash Charge)',
      connectivity: '5G, AI LinkBoost 360-degree Antenna',
      imeiStatus: 'Factory Sealed Cartons'
    },
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    badges: ['Retail Counter Favourite']
  },

  // --- CERTIFIED GRADE A+ PRE-OWNED / REFURBISHED MASTER LOTS ---
  {
    id: 'mm-grade-a-iphone-15pm',
    name: 'Apple iPhone 15 Pro Max (Grade A+ Lot)',
    tagline: 'Certified Clean IMEI • 90%+ Battery Health • Pristine Condition',
    brand: 'apple',
    category: 'certified',
    condition: 'Grade A+ Certified Refurbished',
    storage: '256GB',
    colors: ['Natural Titanium', 'Blue Titanium', 'Black Titanium'],
    moq: 5,
    masterCartonSize: 25,
    tier1Price: 799,
    tier2Price: 759,
    tier3Price: 720,
    suggestedMSRP: 920,
    stockStatus: 'In Stock - 45 Units Available',
    stockCount: 45,
    warranty: '90-Day Mobile Mall Dealer Replacement Guarantee',
    specs: {
      display: '6.7" Super Retina XDR OLED 120Hz (Grade A+ Zero Scratches)',
      processor: 'Apple A17 Pro (3nm)',
      camera: '48MP Triple Camera System (100% Tested Optical Engine)',
      battery: 'Original Battery Health 90% - 98%',
      connectivity: 'Factory Unlocked (Works on all Global GSM / 5G Carriers)',
      imeiStatus: 'Clean GSX Whitelist Report Included'
    },
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    badges: ['Highest Profit Margin Spreads', 'Tested 100-Point QA']
  },
  {
    id: 'mm-grade-a-iphone-13',
    name: 'Apple iPhone 13 (Grade A+ Master Batch)',
    tagline: 'High Turnover Reseller Lot • OEM Tested • 88%+ Battery',
    brand: 'apple',
    category: 'certified',
    condition: 'Grade A+ Certified Refurbished',
    storage: '128GB',
    colors: ['Midnight', 'Starlight', 'Blue', 'Pink'],
    moq: 10,
    masterCartonSize: 30,
    tier1Price: 349,
    tier2Price: 329,
    tier3Price: 310,
    suggestedMSRP: 410,
    stockStatus: 'In Stock - High Turnover Lot',
    stockCount: 110,
    warranty: '60-Day Mobile Mall Wholesale Replacement Warranty',
    specs: {
      display: '6.1" Super Retina XDR OLED',
      processor: 'Apple A15 Bionic',
      camera: '12MP Dual Camera System (Night Mode, 4K Dolby Vision)',
      battery: 'Tested OEM Battery (88%+ Health)',
      connectivity: '5G Worldwide Unlocked',
      imeiStatus: 'Clean GSX Report, Zero Blacklist'
    },
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80',
    badges: ['High Retail Resale Multiplier']
  }
];

export const wholesaleBenefits = [
  {
    icon: 'ShieldCheck',
    title: '100% Genuine IMEI & Clean Serial Guarantee',
    desc: 'Every unit is direct from authorized distribution networks with factory seals intact and clean verified IMEI records.'
  },
  {
    icon: 'Layers',
    title: 'Tiered Bulk Pricing & Dealer Margins',
    desc: 'Structured discount tiers engineered specifically for retailers, resellers, and volume dealers to maximize margin spreads.'
  },
  {
    icon: 'Truck',
    title: 'Same-Day Insured Air Freight Dispatch',
    desc: 'Orders cleared by 4:00 PM ship same day with premier express couriers and comprehensive transit insurance.'
  },
  {
    icon: 'FileText',
    title: 'Official GST / Commercial Invoicing',
    desc: 'Full tax-compliant proforma and tax invoices for seamless input tax credit (ITC) and accounting reconciliation.'
  },
  {
    icon: 'Headphones',
    title: 'Dedicated B2B Wholesale Key Account Desk',
    desc: 'Personalized dealer support via direct WhatsApp and telephone for priority allocations and real-time inventory holds.'
  },
  {
    icon: 'RotateCcw',
    title: 'SLA-Backed DOA & Replacement Terms',
    desc: 'Swift resolution protocols for dead-on-arrival or transit discrepancies with hassle-free dealer replacements.'
  }
];

export const liveStockTicker = [
  { text: 'Apple iPhone 16 Pro Max 256GB Desert Titanium — 60 Units In Stock', status: 'Available' },
  { text: 'Samsung Galaxy S24 Ultra 512GB Titanium Black — 40 Units Ready', status: 'Hot' },
  { text: 'iPad 10th Gen 64GB Silver / Blue — 140 Units Master Lots Available', status: 'Bulk MOQ' },
  { text: 'OnePlus 12 16GB+512GB Flowy Emerald — Special Wholesale Tier Open', status: 'Limited' },
  { text: 'Grade A+ Certified iPhone 15 Pro Max 256GB — High Margin Lot', status: 'Bestseller' },
  { text: 'Redmi Note 13 Pro+ 5G 256GB — 15 Master Cartons Arrived', status: 'Ready Dispatch' }
];

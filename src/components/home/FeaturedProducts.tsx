'use client';

import { motion } from 'framer-motion';
import ProductCard from '../products/ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: '1',
      name: 'Wireless Bluetooth Headphones',
      price: 2499,
      originalPrice: 3999,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      rating: 4.8,
      reviewCount: 1247,
      category: 'Electronics',
      isNew: true,
      discount: 38
    },
    {
      id: '2',
      name: 'Premium Cotton T-Shirt',
      price: 899,
      originalPrice: 1299,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      rating: 4.6,
      reviewCount: 892,
      category: 'Fashion',
      discount: 31
    },
    {
      id: '3',
      name: 'Smart Fitness Watch',
      price: 5999,
      originalPrice: 8999,
      image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop',
      rating: 4.9,
      reviewCount: 2156,
      category: 'Electronics',
      isNew: true,
      discount: 33
    },
    {
      id: '4',
      name: 'Ergonomic Office Chair',
      price: 12999,
      originalPrice: 18999,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      rating: 4.7,
      reviewCount: 567,
      category: 'Home & Garden',
      discount: 32
    },
    {
      id: '5',
      name: 'Running Shoes Pro',
      price: 3499,
      originalPrice: 4999,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      rating: 4.5,
      reviewCount: 1234,
      category: 'Sports & Fitness',
      discount: 30
    },
    {
      id: '6',
      name: 'Organic Face Cream',
      price: 799,
      originalPrice: 1199,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
      rating: 4.4,
      reviewCount: 678,
      category: 'Beauty & Health',
      discount: 33
    },
    {
      id: '7',
      name: 'Gaming Laptop Stand',
      price: 1499,
      originalPrice: 2499,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop',
      rating: 4.6,
      reviewCount: 445,
      category: 'Electronics',
      discount: 40
    },
    {
      id: '8',
      name: 'Designer Handbag',
      price: 8999,
      originalPrice: 12999,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop',
      rating: 4.8,
      reviewCount: 789,
      category: 'Fashion',
      isNew: true,
      discount: 31
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products that combine quality, 
            style, and value for an exceptional shopping experience.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="products-grid"
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Products Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/products"
            className="btn-primary text-lg px-8 py-3 inline-flex items-center gap-2"
          >
            View All Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

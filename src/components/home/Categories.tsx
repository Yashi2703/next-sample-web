'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Categories = () => {
  const categories = [
    {
      id: 'electronics',
      name: 'Electronics',
      icon: '📱',
      description: 'Latest gadgets & devices',
      productCount: '2.5k+',
      color: 'from-blue-500 to-cyan-500',
      href: '/category/electronics'
    },
    {
      id: 'fashion',
      name: 'Fashion',
      icon: '👕',
      description: 'Trendy clothing & accessories',
      productCount: '1.8k+',
      color: 'from-pink-500 to-rose-500',
      href: '/category/fashion'
    },
    {
      id: 'home',
      name: 'Home & Garden',
      icon: '🏠',
      description: 'Furniture & decor items',
      productCount: '1.2k+',
      color: 'from-green-500 to-emerald-500',
      href: '/category/home'
    },
    {
      id: 'sports',
      name: 'Sports & Fitness',
      icon: '⚽',
      description: 'Equipment & activewear',
      productCount: '950+',
      color: 'from-orange-500 to-red-500',
      href: '/category/sports'
    },
    {
      id: 'books',
      name: 'Books & Media',
      icon: '📚',
      description: 'Knowledge & entertainment',
      productCount: '750+',
      color: 'from-purple-500 to-indigo-500',
      href: '/category/books'
    },
    {
      id: 'beauty',
      name: 'Beauty & Health',
      icon: '💄',
      description: 'Cosmetics & wellness',
      productCount: '650+',
      color: 'from-yellow-500 to-orange-500',
      href: '/category/beauty'
    },
    {
      id: 'automotive',
      name: 'Automotive',
      icon: '🚗',
      description: 'Car parts & accessories',
      productCount: '450+',
      color: 'from-gray-500 to-slate-500',
      href: '/category/automotive'
    },
    {
      id: 'toys',
      name: 'Toys & Games',
      icon: '🎮',
      description: 'Fun for all ages',
      productCount: '380+',
      color: 'from-red-500 to-pink-500',
      href: '/category/toys'
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
    <section className="section-padding bg-gray-50">
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
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of products organized into convenient categories. 
            Find exactly what you are looking for with ease.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={category.href} className="block">
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                  {/* Category Icon */}
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                    <span>{category.icon}</span>
                  </div>

                  {/* Category Info */}
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {category.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {category.description}
                  </p>

                  {/* Product Count */}
                  <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                    {category.productCount} Products
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Categories Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/categories"
            className="btn-outline text-lg px-8 py-3 inline-flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            View All Categories
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;

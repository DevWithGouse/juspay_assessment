import React from 'react';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import { motion } from 'framer-motion';

const locations = [
  { city: 'New York', value: '72K', progress: 72, coordinates: [40.7128, -74.0060] },
  { city: 'San Francisco', value: '39K', progress: 39, coordinates: [37.7749, -122.4194] },
  { city: 'Sydney', value: '25K', progress: 25, coordinates: [-33.8688, 151.2093] },
  { city: 'Singapore', value: '61K', progress: 61, coordinates: [1.3521, 103.8198] },
];

function WorldMap() {
  return (
    <div className="p-5 bg-card-background rounded-xl">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-0">Revenue by Location</h3>
      <div className="h-40 relative m-1 flex justify-center">
        <VectorMap
          map={worldMill}
          backgroundColor="transparent"
          zoomOnScroll={false}
          zoomButtons={false}
          containerStyle={{
            width: 'auto',
            height: '70%',
          }}
          regionStyle={{
            initial: {
              fill: '#d5e6f2',
              "fill-opacity": 0.9,
              stroke: 'none',
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: 'pointer',
            },
            selected: {
              fill: '#4B5563',
            },
            selectedHover: {},
          }}
          markerStyle={{
            initial: {
              fill: '#000000',
              stroke: '#FFFFFF',
              "fill-opacity": 1,
              "stroke-width": 1,
              r: 3,
            },
            hover: {
              stroke: '#1F2937',
              "fill-opacity": 0.8,
              "stroke-width": 2,
            },
          }}
          markers={locations.map((loc) => ({
            latLng: loc.coordinates,
            name: loc.city,
          }))}
        />
      </div>
      <div className="space-y-4">
        {locations.map((location) => (
          <motion.div 
            key={location.city} 
            className="space-y-1"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <motion.div 
              className="flex items-center justify-between"
              whileHover={{ x: 2 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <motion.div 
                className="text-sm text-gray-900 dark:text-white"
                whileHover={{ fontWeight: 600 }}
              >
                {location.city}
              </motion.div>
              <motion.div 
                className="text-sm font-medium text-gray-900 dark:text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {location.value}
              </motion.div>
            </motion.div>
            <div className="h-1 w-full rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-sky-200/50 rounded-full transition-all duration-500"
                style={{ width: `${location.progress}%` }}
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default WorldMap;
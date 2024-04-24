// FirebaseAnalytics.js

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const FirebaseAnalytics = ({ firebaseConfig }) => {
    const location = useLocation();

    useEffect(() => {
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);

        // Log a page view event when the location changes
        // analytics.logEvent('page_view', { page_path: location.pathname });

        // Clean-up function
        return () => {
            // You can add clean-up code here if needed
        };
    }, [firebaseConfig, location.pathname]); // Dependency array includes firebaseConfig and location.pathname

    return null; // Since this component doesn't render anything visible, return null
}

export default FirebaseAnalytics;

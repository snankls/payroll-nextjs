import ComponentsDashboardFinance from '@/components/dashboard/components-dashboard-finance';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Sales Admin',
};

const Sales = () => {
    return <ComponentsDashboardFinance />;
};

export default Sales;

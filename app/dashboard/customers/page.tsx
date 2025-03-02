import { Metadata } from 'next';
import { fetchCustomers } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import CustomersTable from '@/app/ui/customers/table';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
    return <p>Customers Page</p>;
  }
'use client';
import React, { Fragment, useEffect, useState } from 'react';
import { sortBy } from 'lodash';
import IconTrashLines from '@/components/icon/icon-trash-lines';
import IconEdit from '@/components/icon/icon-edit';
import IconEye from '@/components/icon/icon-eye';
import { DataTableSortStatus, DataTable } from 'mantine-datatable';
import Link from 'next/link';
import { Transition, Dialog, DialogPanel, TransitionChild } from '@headlessui/react';
import IconX from '@/components/icon/icon-x';
import Select from 'react-select';

export default function Designations() {
    const [items, setItems] = useState([
        {
            id: 1,
            invoice: '081451',
            name: 'Laurie Fox',
            email: 'lauriefox@company.com',
            date: '15 Dec 2020',
            amount: '2275.45',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 2,
            invoice: '081452',
            name: 'Alexander Gray',
            email: 'alexGray3188@gmail.com',
            date: '20 Dec 2020',
            amount: '1044.00',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 3,
            invoice: '081681',
            name: 'James Taylor',
            email: 'jamestaylor468@gmail.com',
            date: '27 Dec 2020',
            amount: '20.00',
            status: { tooltip: 'Pending', color: 'danger' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 4,
            invoice: '082693',
            name: 'Grace Roberts',
            email: 'graceRoberts@company.com',
            date: '31 Dec 2020',
            amount: '344.00',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 5,
            invoice: '084743',
            name: 'Donna Rogers',
            email: 'donnaRogers@hotmail.com',
            date: '03 Jan 2021',
            amount: '405.15',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 6,
            invoice: '086643',
            name: 'Amy Diaz',
            email: 'amy968@gmail.com',
            date: '14 Jan 2020',
            amount: '100.00',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 7,
            invoice: '086773',
            name: 'Nia Hillyer',
            email: 'niahillyer666@comapny.com',
            date: '20 Jan 2021',
            amount: '59.21',
            status: { tooltip: 'Pending', color: 'danger' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 8,
            invoice: '087916',
            name: 'Mary McDonald',
            email: 'maryDonald007@gamil.com',
            date: '25 Jan 2021',
            amount: '79.00',
            status: { tooltip: 'Pending', color: 'danger' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 9,
            invoice: '089472',
            name: 'Andy King',
            email: 'kingandy07@company.com',
            date: '28 Jan 2021',
            amount: '149.00',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 10,
            invoice: '091768',
            name: 'Vincent Carpenter',
            email: 'vincentcarpenter@gmail.com',
            date: '30 Jan 2021',
            amount: '400',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 11,
            invoice: '095841',
            name: 'Kelly Young',
            email: 'youngkelly@hotmail.com',
            date: '06 Feb 2021',
            amount: '49.00',
            status: { tooltip: 'Pending', color: 'danger' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 12,
            invoice: '098424',
            name: 'Alma Clarke',
            email: 'alma.clarke@gmail.com',
            date: '10 Feb 2021',
            amount: '234.40',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
    ]);

    const [modal1, setModal1] = useState(false);

    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(items, 'invoice'));
    const [records, setRecords] = useState(initialRecords);
    const [selectedRecords, setSelectedRecords] = useState<any>([]);

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'firstName',
        direction: 'asc',
    });

     // Departments
     const department = [
        { value: 'accountant', label: 'Accountant' },
        { value: 'engineer', label: 'Engineer' },
    ];

     // Status
     const options = [
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
    ];

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecords([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        setInitialRecords(() => {
            return items.filter((item) => {
                return (
                    item.invoice.toLowerCase().includes(search.toLowerCase()) ||
                    item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.email.toLowerCase().includes(search.toLowerCase()) ||
                    item.date.toLowerCase().includes(search.toLowerCase()) ||
                    item.amount.toLowerCase().includes(search.toLowerCase()) ||
                    item.status.tooltip.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
    }, [search]);

    useEffect(() => {
        const data2 = sortBy(initialRecords, sortStatus.columnAccessor);
        setRecords(sortStatus.direction === 'desc' ? data2.reverse() : data2);
        setPage(1);
    }, [sortStatus]);

    const deleteRow = (id: any = null) => {
        if (window.confirm('Are you sure want to delete selected row ?')) {
            if (id) {
                setRecords(items.filter((user) => user.id !== id));
                setInitialRecords(items.filter((user) => user.id !== id));
                setItems(items.filter((user) => user.id !== id));
                setSelectedRecords([]);
                setSearch('');
            } else {
                let selectedRows = selectedRecords || [];
                const ids = selectedRows.map((d: any) => {
                    return d.id;
                });
                const result = items.filter((d) => !ids.includes(d.id as never));
                setRecords(result);
                setInitialRecords(result);
                setItems(result);
                setSelectedRecords([]);
                setSearch('');
                setPage(1);
            }
        }
    };

    return (
        <>
        <div className="panel border-white-light px-0 dark:border-[#1b2e4b]">
            <div className="invoice-table">
                <div className="mb-4.5 flex flex-col gap-5 px-5 md:flex-row md:items-center">
                    <div className="flex items-center gap-2">
                        <button type="button" className="btn btn-danger gap-2" onClick={() => deleteRow()}>
                            <IconTrashLines />
                            Delete
                        </button>
                        <button type="button" className="btn btn-primary" onClick={() => setModal1(true)}>
                            Add New
                        </button>
                    </div>
                    <div className="ltr:ml-auto rtl:mr-auto">
                        <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>

                <div className="datatables pagination-padding">
                    <DataTable
                        className="table-hover whitespace-nowrap"
                        records={records}
                        columns={[
                            {
                                accessor: 'designation_id',
                                sortable: true,
                                titleClassName: 'text-right',
                                render: ({ invoice, id }) => <div className="font-semibold">{`${invoice}`}</div>,
                            },
                            {
                                accessor: 'designation_name',
                                sortable: true,
                                titleClassName: 'text-right',
                                render: ({ name, id }) => <div className="font-semibold">{`${name}`}</div>,
                            },
                            {
                                accessor: 'department_name',
                                sortable: true,
                                render: ({ name, id }) => (
                                    <div className="items-center font-semibold">
                                        <div>{name}</div>
                                    </div>
                                ),
                            },
                            {
                                accessor: 'status',
                                sortable: true,
                                render: ({ status }) => <span className={`badge badge-outline-${status.color} `}>{status.tooltip}</span>,
                            },
                            {
                                accessor: 'action',
                                title: 'Actions',
                                sortable: false,
                                textAlignment: 'center',
                                render: ({ id }) => (
                                    <div className="mx-auto flex w-max items-center gap-4">
                                        <button type="button" className="flex hover:text-info" onClick={() => setModal1(true)}>
                                            <IconEdit className="h-4.5 w-4.5" />
                                        </button>
                                        <button type="button" className="flex hover:text-danger" onClick={(e) => deleteRow(id)}>
                                            <IconTrashLines />
                                        </button>
                                    </div>
                                ),
                            },
                        ]}
                        highlightOnHover
                        totalRecords={initialRecords.length}
                        recordsPerPage={pageSize}
                        page={page}
                        onPageChange={(p) => setPage(p)}
                        recordsPerPageOptions={PAGE_SIZES}
                        onRecordsPerPageChange={setPageSize}
                        sortStatus={sortStatus}
                        onSortStatusChange={setSortStatus}
                        selectedRecords={selectedRecords}
                        onSelectedRecordsChange={setSelectedRecords}
                        paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                    />
                </div>
            </div>
        </div>
        
        {/* Modal */}
        <Transition appear show={modal1} as={Fragment}>
            <Dialog as="div" open={modal1} onClose={() => setModal1(false)}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0" />
                </TransitionChild>
                <div className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                    <div className="flex min-h-screen items-start justify-center px-4">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel as="div" className="panel my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                                    <div className="text-lg font-bold">Allowance Type Add/Edit</div>
                                    <button type="button" className="text-white-dark hover:text-dark" onClick={() => setModal1(false)}>
                                        <IconX />
                                    </button>
                                </div>
                                <div className="p-5">
                                    <form>
                                        <fieldset className="grid grid-cols-1 items-end gap-4 md:grid-cols-1">
                                            <div>
                                                <label className="text-white-dark">Name</label>
                                                <input type="text" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                                            </div>
                                            <div>
                                                <label className="text-white-dark">Status</label>
                                                <Select defaultValue={options[0]} options={options} isSearchable={false} />
                                            </div>
                                        </fieldset>

                                        <fieldset className="grid grid-cols-1 items-end gap-4 md:grid-cols-1 mt-4">
                                            <div className='mt-3'>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
        </>
    );
};

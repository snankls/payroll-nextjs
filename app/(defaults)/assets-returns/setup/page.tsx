'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '@/store';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';
import IconX from '@/components/icon/icon-x';
import 'flatpickr/dist/flatpickr.css';

export default function UserSetup() {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const [date1, setDate1] = useState<any>('');

    // employee
    const employee = [
        { value: 'akram', label: 'Akram' },
        { value: 'ali', label: 'Ali' },
    ];

    // allowance item
    const allowance_item = [
        { value: 'mobile', label: 'Mobile' },
        { value: 'car', label: 'Cat' },
        { value: 'bike', label: 'Bike' },
    ];

    // Status
    const options = [
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
    ];

    const [items, setItems] = useState<any>([
        {
            id: 1,
            title: '',
            description: '',
            rate: 0,
            quantity: 0,
            amount: 0,
        },
    ]);

    const addItem = () => {
        let maxId = 0;
        maxId = items?.length ? items.reduce((max: number, character: any) => (character.id > max ? character.id : max), items[0].id) : 0;

        setItems([
            ...items,
            {
                id: maxId + 1,
                title: '',
                description: '',
                rate: 0,
                quantity: 0,
                amount: 0,
            },
        ]);
    };

    const removeItem = (item: any = null) => {
        setItems(items.filter((d: any) => d.id !== item.id));
    };

    return (
        <div className='panel'>
            <div className="mb-5">
                <form>
                    <fieldset className="grid grid-cols-1 items-end gap-4 md:grid-cols-4">
                        <div>
                            <label className="text-white-dark">Select Employee</label>
                            <Select defaultValue={employee[0]} options={employee} isSearchable={false} />
                        </div>
                        <div>
                            <label className="text-white-dark">Issue Date</label>
                            <Flatpickr value={date1}
                                options={{ dateFormat: 'Y-m-d' }}
                                className="form-input"
                                placeholder='yyyy-mm-dd'
                                onChange={(date) => setDate1(date)}
                            />
                        </div>
                        <div>
                            <label className="text-white-dark">Status</label>
                            <Select defaultValue={options[0]} options={options} isSearchable={false} />
                        </div>
                    </fieldset>

                    <fieldset className="grid grid-cols-1 items-end gap-4 md:grid-cols-1 mt-4">
                        <div>
                            <label className="text-white-dark">Description</label>
                            <textarea rows={5} className="form-textarea ltr:rounded-l-none rtl:rounded-r-none"></textarea>
                        </div>
                    </fieldset>

                    <fieldset className="grid grid-cols-1 items-end gap-4 md:grid-cols-1 mt-4">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Items</th>
                                        <th>Description</th>
                                        <th className="w-1"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.length <= 0 && (
                                        <tr>
                                            <td colSpan={5} className="!text-center font-semibold">
                                                No Item Available
                                            </td>
                                        </tr>
                                    )}
                                    {items.map((item: any) => {
                                        return (
                                            <tr className="align-top" key={item.id}>
                                                <td>
                                                    <Select defaultValue={allowance_item[0]} options={allowance_item} isSearchable={false} />
                                                </td>
                                                <td>
                                                    <textarea className="form-textarea" defaultValue={item.description}></textarea>
                                                </td>
                                                <td>
                                                    <button type="button" onClick={() => removeItem(item)}>
                                                        <IconX className="h-5 w-5" />
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>

                            <div className="mb-6 sm:mb-0">
                                <button type="button" className="btn btn-success" onClick={() => addItem()}>
                                    Add Item
                                </button>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="grid grid-cols-1 items-end gap-4 md:grid-cols-1 mt-4">
                        <div className='mt-3'>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};
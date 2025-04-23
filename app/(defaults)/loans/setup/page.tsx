'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '@/store';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import 'flatpickr/dist/flatpickr.css';

export default function UserSetup() {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const [date1, setDate1] = useState<any>('');

    // employee
    const employee = [
        { value: 'akram', label: 'Akram' },
        { value: 'ali', label: 'Ali' },
    ];

    // Status
    const options = [
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
    ];

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
                            <label className="text-white-dark">Amount</label>
                            <input type="text" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                        <div>
                            <label className="text-white-dark">Installment Plan <small>in month</small></label>
                            <input type="text" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                        <div>
                            <label className="text-white-dark">Start Date</label>
                            <Flatpickr value={date1}
                                options={{ dateFormat: 'Y-m-d' }}
                                className="form-input"
                                placeholder='yyyy-mm-dd'
                                onChange={(date) => setDate1(date)}
                            />
                        </div>
                        <div>
                            <label className="text-white-dark">End Date</label>
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
                        <div className='mt-3'>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};
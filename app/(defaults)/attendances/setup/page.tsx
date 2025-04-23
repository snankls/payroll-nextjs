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
    const [date4, setDate4] = useState<any>('13:45');

    // Employee
    const employee = [
        { value: 'ahmad', label: 'Ahmad' },
        { value: 'madni', label: 'Madni' },
    ];

    // Status
    const options = [
        { value: 'Present', label: 'Present' },
        { value: 'Absent', label: 'Absent' },
        { value: 'Half Day', label: 'Half Day' },
        { value: 'Leave', label: 'Leave' },
    ];

    // Upload Image
    const [images, setImages] = useState<any>([]);
    const maxNumber = 69;
    const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
        setImages(imageList as never[]);
    };

    return (
        <div className='panel'>
            <div className="mb-5">
                <form>
                    <fieldset className="grid grid-cols-1 items-end gap-4 md:grid-cols-4">
                        <div>
                            <label className="text-white-dark">Employee Name</label>
                            <Select defaultValue={employee[0]} options={employee} isSearchable={false} />
                        </div>
                        <div>
                            <label className="text-white-dark">Date</label>
                            <Flatpickr value={date1}
                                options={{ dateFormat: 'Y-m-d' }}
                                className="form-input"
                                placeholder='yyyy-mm-dd'
                                onChange={(date) => setDate1(date)}
                            />
                        </div>
                        <div>
                            <label className="text-white-dark">Check In</label>
                            <Flatpickr
                                options={{
                                    noCalendar: true,
                                    enableTime: true,
                                    dateFormat: 'H:i',
                                }}
                                className="form-input"
                                onChange={(date4) => setDate4(date4)}
                            />
                        </div>
                        <div>
                            <label className="text-white-dark">Check Out</label>
                            <Flatpickr
                                options={{
                                    noCalendar: true,
                                    enableTime: true,
                                    dateFormat: 'H:i',
                                }}
                                className="form-input"
                                onChange={(date4) => setDate4(date4)}
                            />
                        </div>
                        <div>
                            <label className="text-white-dark">Duration</label>
                            <input type="text" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                        <div>
                            <label className="text-white-dark">Status</label>
                            <Select defaultValue={options[0]} options={options} isSearchable={false} />
                        </div>
                    </fieldset>

                    <fieldset className="grid grid-cols-1 items-end gap-4 md:grid-cols-1 mt-4">
                        <div>
                            <label className="text-white-dark">Notes</label>
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
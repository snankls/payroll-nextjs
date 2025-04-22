'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '@/store';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import ImageUploading, { ImageListType } from 'react-images-uploading';

export default function LeaveApplicationsSetup() {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const [date1, setDate1] = useState<any>('');

    // Status
    const leaveType = [
        { value: 'casual', label: 'Casual' },
        { value: 'sick', label: 'Sick' },
    ];

    // Status
    const options = [
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
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
                            <label className="text-white-dark">Leave Type</label>
                            <Select defaultValue={leaveType[0]} options={leaveType} isSearchable={false} />
                        </div>
                        <div>
                            <label className="text-white-dark">Date From</label>
                            <Flatpickr value={date1}
                                options={{ dateFormat: 'Y-m-d' }}
                                className="form-input"
                                placeholder='yyyy-mm-dd'
                                onChange={(date) => setDate1(date)}
                            />
                        </div>
                        <div>
                            <label className="text-white-dark">Date To</label>
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
                            <label className="text-white-dark">Reason</label>
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
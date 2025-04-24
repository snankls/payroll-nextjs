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

    // Departments
    const department = [
        { value: 'purchase', label: 'Purchase' },
        { value: 'wages', label: 'Wages' },
    ];

    // Designations
    const designation = [
        { value: 'accountant', label: 'Accountant' },
        { value: 'engineer', label: 'Engineer' },
    ];

    // Location
    const location = [
        { value: 'multan', label: 'Multan' },
        { value: 'lahore', label: 'Lahore' },
        { value: 'karachi', label: 'Karachi' },
    ];

    // gender
    const gender = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
    ];

    // job type
    const job_type = [
        { value: 'permanent', label: 'Permanent' },
        { value: 'temporary', label: 'Temporary' },
    ];

    // bank
    const bank = [
        { value: 'ali', label: 'Ali HBL' },
        { value: 'abrar', label: 'Abrar UBL' },
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
                            <label className="text-white-dark">Employee ID</label>
                            <input type="text" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                        <div>
                            <label className="text-white-dark">First Name</label>
                            <input type="text" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                        <div>
                            <label className="text-white-dark">Last Name</label>
                            <input type="text" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                        <div>
                            <label className="text-white-dark">Email</label>
                            <input type="email" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                        <div>
                            <label className="text-white-dark">Phone Number</label>
                            <input type="text" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                        <div>
                            <label className="text-white-dark">Gender</label>
                            <Select defaultValue={gender[0]} options={gender} isSearchable={false} />
                        </div>
                        <div>
                            <label className="text-white-dark">Date of Birth</label>
                            <Flatpickr value={date1}
                                options={{ dateFormat: 'Y-m-d' }}
                                className="form-input"
                                placeholder='yyyy-mm-dd'
                                onChange={(date) => setDate1(date)}
                            />
                        </div>
                        <div>
                            <label className="text-white-dark">Joining Date</label>
                            <Flatpickr value={date1}
                                options={{ dateFormat: 'Y-m-d' }}
                                className="form-input"
                                placeholder='yyyy-mm-dd'
                                onChange={(date) => setDate1(date)}
                            />
                        </div>
                        <div>
                            <label className="text-white-dark">Resign Date</label>
                            <Flatpickr value={date1}
                                options={{ dateFormat: 'Y-m-d' }}
                                className="form-input"
                                placeholder='yyyy-mm-dd'
                                onChange={(date) => setDate1(date)}
                            />
                        </div>
                        <div>
                            <label className="text-white-dark">Select Department</label>
                            <Select defaultValue={department[0]} options={department} isSearchable={false} />
                        </div>
                        <div>
                            <label className="text-white-dark">Select Designation</label>
                            <Select defaultValue={designation[0]} options={designation} isSearchable={false} />
                        </div>
                        <div>
                            <label className="text-white-dark">Select Job Type</label>
                            <Select defaultValue={job_type[0]} options={job_type} isSearchable={false} />
                        </div>
                        <div>
                            <label className="text-white-dark">Location</label>
                            <Select defaultValue={location[0]} options={location} isSearchable={false} />
                        </div>
                        <div>
                            <label className="text-white-dark">Select Bank</label>
                            <Select defaultValue={bank[0]} options={bank} isSearchable={false} />
                        </div>
                        <div>
                            <label className="text-white-dark">Basic Salary</label>
                            <input type="text" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                        <div>
                            <label className="text-white-dark">House Rent</label>
                            <input type="text" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                        <div>
                            <label className="text-white-dark">Medical Allowances</label>
                            <input type="text" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                        <div>
                            <label className="text-white-dark">Petrol Allowances</label>
                            <input type="text" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                        <div>
                            <label className="text-white-dark">Total Salary</label>
                            <input type="text" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                        <div>
                            <label className="text-white-dark">Status</label>
                            <Select defaultValue={options[0]} options={options} isSearchable={false} />
                        </div>
                    </fieldset>

                    <fieldset className="grid grid-cols-1 items-end gap-4 md:grid-cols-2 mt-4">
                        <div>
                            <label className="text-white-dark">Description</label>
                            <textarea rows={5} className="form-textarea ltr:rounded-l-none rtl:rounded-r-none"></textarea>
                        </div>
                        <div>
                            <label className="text-white-dark">Address</label>
                            <textarea rows={5} className="form-textarea ltr:rounded-l-none rtl:rounded-r-none"></textarea>
                        </div>
                        <div>
                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-1">
                                <div className="custom-file-container" data-upload-id="myFirstImage">
                                    <div className="label-container">
                                        <label className="text-white-dark">Upload </label>
                                        <button
                                            type="button"
                                            className="custom-file-container__image-clear"
                                            title="Clear Image"
                                            onClick={() => {
                                                setImages([]);
                                            }}
                                        >
                                            ×
                                        </button>
                                    </div>
                                    {/* <label className="custom-file-container__custom-file"></label> */}
                                    <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
                                    {/* <input type="hidden" name="MAX_FILE_SIZE" value="10485760" /> */}
                                    <ImageUploading value={images} onChange={onChange} maxNumber={maxNumber}>
                                        {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                                            <div className="upload__image-wrapper">
                                                <button className="custom-file-container__custom-file__custom-file-control" onClick={onImageUpload}>
                                                    Choose File...
                                                </button>
                                            </div>
                                        )}
                                    </ImageUploading>
                                </div>
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
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
                            <label className="text-white-dark">Full Name</label>
                            <input type="text" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                        <div>
                            <label className="text-white-dark">Username</label>
                            <input type="text" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                        <div>
                            <label className="text-white-dark">Email</label>
                            <input type="text" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                        <div>
                            <label className="text-white-dark">Password</label>
                            <input type="password" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                        <div>
                            <label className="text-white-dark">Confirm Password</label>
                            <input type="password" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                        <div>
                            <label className="text-white-dark">Phone Number</label>
                            <input type="text" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
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
                            <label className="text-white-dark">Status</label>
                            <Select defaultValue={options[0]} options={options} isSearchable={false} />
                        </div>
                    </fieldset>

                    <fieldset className="grid grid-cols-1 items-end gap-4 md:grid-cols-1 mt-4">
                        <div>
                            <label className="text-white-dark">Description</label>
                            <textarea rows={5} className="form-textarea ltr:rounded-l-none rtl:rounded-r-none"></textarea>
                        </div>
                        <div>
                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
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
                        <div className='mt-3'>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};
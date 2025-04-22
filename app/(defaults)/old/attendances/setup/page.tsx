import IconCalendar from '@/components/icon/icon-calendar';
import IconClock from '@/components/icon/icon-clock';
import IconCoffee from '@/components/icon/icon-coffee';
import IconCreditCard from '@/components/icon/icon-credit-card';
import IconDribbble from '@/components/icon/icon-dribbble';
import IconGithub from '@/components/icon/icon-github';
import IconMail from '@/components/icon/icon-mail';
import IconMapPin from '@/components/icon/icon-map-pin';
import IconPencilPaper from '@/components/icon/icon-pencil-paper';
import IconPhone from '@/components/icon/icon-phone';
import IconShoppingBag from '@/components/icon/icon-shopping-bag';
import IconTag from '@/components/icon/icon-tag';
import IconTwitter from '@/components/icon/icon-twitter';
import ComponentsUsersProfilePaymentHistory from '@/components/users/profile/components-users-profile-payment-history';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import MaskedInput from 'react-text-mask';

const Profile = () => {
    return (
        <div className='panel'>
            <div className="mb-5">
                <form>
                    <fieldset className="grid grid-cols-1 items-end gap-4 md:grid-cols-4">
                        <div>
                            <label htmlFor="dynamicMask1" className="text-white-dark">Full Name</label>
                            <input type="text" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                        <div>
                            <label htmlFor="dynamicMask2" className="text-white-dark">Email</label>
                            <input type="text" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                        <div>
                            <label htmlFor="dynamicMask3" className="text-white-dark">Password</label>
                            <input type="text" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Profile;

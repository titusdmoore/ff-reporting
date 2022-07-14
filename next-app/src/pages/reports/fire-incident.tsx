import Head from "next/head";
import Sidebar from "../../components/sidebar";
import ButtonGroup from "../../components/button-group";
import { useState } from "react";

export default function FireIncident() {
    const [ addressType, setAddressType ] = useState(null);

    console.log(addressType)

    return (
        <div className="flex flex-col min-h-screen px-2 justify-center items-center">
            <Head>
                <title>Incident Reporting System</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='flex w-full'>
                <Sidebar className='h-screen w-64 py-4' />
                <div className='flex-1 px-8 pt-4 bg-slate-400'>
                    <form action="/incidents/fire-incident" method="post">
                        <div className="w-full" id="form-section-a">
                            <div className="flex justify-center">
                                <input type="text" name="fdid" />
                                <select name="state" defaultValue="state">
                                    <option value="state" disabled>State</option>
                                </select>
                                <input type="datetime" name="incident-date" />
                            </div>
                        </div>
                        <ButtonGroup
                            options={[
                                {
                                    value: 'address',
                                    title: 'Street Address'
                                },
                                {
                                    value: 'intersection',
                                    title: 'Intersection'
                                },
                                {
                                    value: 'front',
                                    title: 'In Front Of'
                                },
                                {
                                    value: 'rear',
                                    title: 'Rear Of'
                                },
                                {
                                    value: 'adjacent',
                                    title: 'Adjacent To'
                                },
                                {
                                    value: 'directions',
                                    title: 'Directions'
                                }
                            ]}
                            value={addressType}
                            valueHandler={setAddressType}
                        />
                        <input type="hidden" name="address-type" value={addressType} />
                    </form>
                </div>
            </main>
        </div>
    );
}
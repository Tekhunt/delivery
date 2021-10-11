import React from 'react'
import '../style.css';
import ServiceType from './ServiceType';

function SelectService() {
    return (
        <div className="delivery-wrap">
            <p className="select">Select a service</p>
        <div className="delivery">
            <ServiceType classStyle="blue-color" type="Air Freight" logo={[<i class="fa fa-plane"></i>]} />
            <ServiceType classStyle="gray" type="Sea Freight" logo={[<i class="fa fa-ship"></i>]} />
            <ServiceType classStyle="gray" type="Inland" below="(Truck & Barge)" logo={[<i class="fa fa-truck"></i>]} />
            <ServiceType classStyle="gray" type="Customs Clerance" logo={[<i class="fa fa-train"></i>]} />
        </div>
        </div>
    )
}

export default SelectService

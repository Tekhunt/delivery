import React from "react";
import '../style.css';
import Services from './Services';

function ServiceSection(){
    return (
        <div className="service-section">
            <div className="center1">
            <h5 className="services-caption">Additional services</h5>
            <div className="services">
                <Services header="Export Forwarding" description="We handle customs clearance and documentation" />
                <Services header="Import Customs Clearance" description="We handle import customs and regulatory requirements" />
                <Services header="Cargo Insurance" description="Protect your cargo from logistics risks up to its full value"/>
                <Services header="Transport/Delivery" description="We deliver the cargo to your door step from the ports" />
            </div>
            </div>
        </div>
    )
}

export default ServiceSection;
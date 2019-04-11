import React, { Component } from 'react';

import './styles.scss';

export default class Main extends Component{
    render(){
        const teams = [
            {
                id:1,
                title: 'Emotional support',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id metus fringilla, pharetra nisi a, accumsan nibh. Suspendisse vitae egestas lectus. Mauris non diam massa. Phasellus id dui iaculis, vulputate neque et, eleifend tortor. Vestibulum sit amet gravida elit. Sed eleifend ex ex, nec tempor nisi faucibus quis.', 
                image:'/assets/img/emot.svg'
            },
            {
                id:2, 
                title: 'Hospitality',
                text:'Morbi leo lorem, feugiat ac nulla in, elementum venenatis sapien. Etiam a risus aliquam augue semper consectetur et a ipsum. Duis at aliquet augue.', 
                image:'/assets/img/hosp.svg'
            },
            {
                id:3, 
                title: 'Assistance',
                text:'Aenean nisi mi, dignissim sit amet ex sit amet, luctus dictum nulla. Mauris quis faucibus orci. Quisque arcu leo, tempor sit amet bibendum non, tempor non mi.', 
                image:'/assets/img/assist.svg'
            },
            {
                id:4, 
                title: 'production',
                text:'Vestibulum lectus ex, gravida ut varius sit amet, porttitor in erat. Pellentesque consectetur tempor metus nec tempus. Pellentesque ultricies vel arcu sit amet tempor. Donec laoreet, sem nec maximus malesuada, justo lacus ultrices libero, quis condimentum leo nisi eu nibh.', 
                image:'/assets/img/prod.svg'
            },
            {
                id:5, 
                title: 'Communication',
                text:'Sed volutpat mi enim, at laoreet nulla pharetra non. Sed dapibus risus turpis, sed bibendum lectus ullamcorper a. Nam facilisis enim id euismod tristique.', 
                image:'/assets/img/commu.svg'
            },
        ];

        return (
            <div>
                <div className="header">
                    <div className="container">
                        <h1 className="mainText">one</h1>
                        <h1 className="subText">You are not alone</h1>

                        <div className="flow left">
                            <div className="cylin first"></div>
                            <div className="cylin second"></div>
                        </div>
                        <div className="flow right">
                            <div className="cylin first"></div>
                            <div className="cylin second"></div>
                        </div>
                    </div>
                </div>
                <div className="polvinho">
                    <img className="nck" src="/assets/img/polvinho.svg"/>
                </div>
                
                <div className="teams mt-5 pb-5">
                    <div className="container">
                        <h1 className="mb-5">Teams</h1>
                        <div className="row">
                            {teams.map((item,key) => 
                                <div key={item.id} className="col-md-4 mt-5">
                                    <div className={`icon icon-${item.id}`}>
                                        <img className="nck" src={item.image}/>
                                    </div>
                                    <h3 className="text-purple2 mt-4">{item.title}</h3>
                                    <p className="text-dkgray">{item.text}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="section-1 container mt-5">
                    <div className="badge">participe</div>
                    <h1 className="mb-5 text-left">venha ser um <span className="text-purple2">Volunteer</span> também</h1>
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="text-dkgray">Vestibulum lectus ex, gravida ut varius sit amet, porttitor in erat. Pellentesque consectetur tempor metus nec tempus. Pellentesque ultricies vel arcu sit amet tempor. Donec laoreet, sem nec maximus malesuada, justo lacus ultrices libero, quis condimentum leo nisi eu nibh. Sed volutpat mi enim, at laoreet nulla pharetra non. Sed dapibus risus turpis, sed bibendum lectus ullamcorper a. Nam facilisis enim id euismod tristique.</p>
                        </div>
                        <div className="col-sm-6">
                            
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
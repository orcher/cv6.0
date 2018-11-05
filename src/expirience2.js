import React, {Component} from 'react'
import './expirience2.css'
import connells_logo from './res/Connells_logo.png'
import elpiast_logo from './res/ELPiast_logo.png'
import rec_logo from './res/REC_logo.png'
import mcafee_logo from './res/McAfee_logo.png'
import imagination_logo from './res/Imagination_logo.png'

class Exp extends Component {
    constructor(props){
        super(props)
        this.state = {
            expanded: false,
        }
    }

    handleClick = () => {
        this.setState({
            expanded: !this.state.expanded,
        })
    }

    render() {
        return(
            <div className='exp-box'>
                <div className='exp-logo-box' onClick={() => this.handleClick()}><img src={this.props.logo} alt='logo' /></div>
                <div className={this.state.expanded ? 'exp-text-box-selected' : 'exp-text-box'}>
                    <h2>{this.props.header}</h2>
                    <h3>{this.props.position}</h3>
                    <h4>{this.props.time}</h4>
                    {this.props.text}
                </div>
            </div>
        )
    }
}

const Expirience2 = () => {
    const renderContent = () => {
        return(
            <div className='expirience-main-box' id='exp'>
                <h1 className='exp-title'>Experience</h1>
                <div className='expirience-box'>
                    <Exp
                        logo={connells_logo}
                        header='Connells Group'
                        position='Senior Application Developer'
                        time='06/2018 - ...'
                        text={
                            <div>
                                My current position as a Senior Application Developer focuses mainly on:
                                <ul>
                                    <li>
                                        Developing and maintaining multiple Web Services: MyBranch, BranchProfile
                                        (<b>C#, ASP.Net MVC, JavaScript, JQuery, Ajax, HTML, CSS, Razor</b>) ...
                                    </li>
                                    <li>
                                        Developing and maintaining multiple desktop applications: MatchMaker (
                                        <b>C++, WCF</b>), MessageSender (<b>C#, HTML, CSS, Razor</b>) ...
                                    </li>
                                    <li>
                                        Developing and maintaining database infrastructure (<b>SQL Server</b>)
                                    </li>
                                    <li>
                                        Working with business analysts to work out solutions for customer needs
                                    </li>
                                    <li>
                                        Working with team developers and testers to improve internal proceses
                                        and agile transformation
                                    </li>
                                </ul>
                            </div>
                        }
                    />
                    <Exp
                        logo={mcafee_logo}
                        header='McAfee'
                        position='Software Developer'
                        time='09/2016 - 06/2018'
                        text={
                            <div>
                                My position in AMCore team in McAfee involved developement of core
                                 malware detection software.
                                <ul>
                                    <li>
                                        Actively work with the team to develop/optimize the process for solution 
                                        delivery
                                    </li>
                                    <li>
                                        Develop tools for existing testing framework used in testing new features
                                    </li>
                                    <li>
                                        Analyze customer issues and help deliver solution to address their 
                                        concerns
                                    </li>
                                    <li>
                                        Guide and mentor new team members on various product features
                                    </li>
                                    <li>
                                        Introducing and providing CI and CD solutions
                                    </li>
                                    <li>
                                        Develop automated tests in (<b>Python</b>)
                                    </li>
                                    <li>
                                        Development and maintnance of main code base (<b>C++, Lua</b>)
                                    </li>
                                </ul>
                            </div>
                        }
                    />
                    <Exp
                        logo={imagination_logo}
                        header='Imagination Technologies'
                        position='Software Design Engineer'
                        time='11/2014 - 09/2016'
                        text={
                            <div>
                                This position as a Software Design Engineer involved designing/developing multi-platform
                                (<b>Windows, Linux</b>), multithreaded, client-server type application using TCP/IP
                                protocol and <b>Qt</b> based GUI to tune digital camera ISP chip.
                                <ul>
                                    <li>
                                        Design/develop whole tool from ground up. Including architecture and network
                                        communication layer (<b>C++, Qt</b>)
                                    </li>
                                    <li>
                                        Implementing new features and components visualizing effects of ISP and 
                                        providing live image feedback (LineView, Histogram, Vectorscope, BLC, LCA, LSH, ...)
                                    </li>
                                    <li>
                                        Designing and maintaining build infrastructure
                                    </li>
                                    <li>
                                        Developing image format conversion algorithms
                                    </li>
                                    <li>
                                        Designing and implementing an integrated testing framework for functional
                                        tests of application GUI from customer perspective
                                    </li>
                                    <li>
                                        Providing training and presentations of end-point product using above mentiond 
                                        application
                                    </li>
                                    <li>
                                        Creating project documentation
                                    </li>
                                    <li>
                                        Bug fixing and code optimisation
                                    </li>
                                </ul>
                            </div>
                        }
                    />
                    <Exp
                        logo={rec_logo}
                        header='REC'
                        position='Software Engineer'
                        time='07/2013 - 10/2014'
                        text={
                            <div>
                                At one point I was assigned to a project in France, to work for Continental (on 
                                behalf of REC) on their new car infotaiment system to be used in new generation 
                                of Peugeot and Citroen
                                <ul>
                                    <li>
                                        Developing part of car media center (<b>C++, Qt, QML</b>)
                                    </li>
                                    <li>
                                        Developing automated tests using <b>GoogleTest</b> framework
                                    </li>
                                    <li>
                                        Performing road tests using end-point product
                                    </li>
                                    <li>
                                        Creating project documentation
                                    </li>
                                    <li>
                                        Working with local management to ensure meeting deadlines and product 
                                        specyfication
                                    </li>
                                </ul>
                                <br />
                                Main project I was involved in while working for REC was firmware development 
                                for Qualcomm telecom processors
                                <ul>
                                    <li>
                                        Developing new features and maintaining firmware for 3G/4G Qualcomm
                                        chips (<b>C, C++</b>)
                                    </li>
                                    <li>
                                        Analyze customer requirements and deliver solutions
                                    </li>
                                    <li>
                                        Cooporate with team in Germany 
                                    </li>
                                    <li>
                                        Creating project documentation
                                    </li>
                                </ul>
                            </div>
                        }
                    />
                    <Exp
                        logo={elpiast_logo}
                        header='EL-Piast'
                        position='Automation System Designer'
                        time='06/2010 - 06/2013'
                        text={
                            <div>
                                In this position as Automation System Designer I was responsible for wide 
                                range of tasks varying from firmware development for company's products,
                                designing and implementing BMS systems on different projects (hospitals,
                                hotels, univesities, ...)
                                <ul>
                                    <li>
                                        Developing firmware for analogue actuators used with AHU involving 
                                        communication via RS-458 MODBUS RTU protocol (<b>C++</b>)
                                    </li>
                                    <li>
                                        Designing and implementing BMS systems controlling and analyzing state
                                        of work of various building automation systems (ventilation, fire detection,
                                        temperature, humidity and pressure control)
                                    </li>
                                    <li>
                                        Creating system documentation
                                    </li>
                                    <li>
                                        Guiding and mentoring new team members
                                    </li>
                                    <li>
                                        Providing internal and external trainings and presentation about company 
                                        products
                                    </li>
                                </ul>
                            </div>
                        }
                    />
                </div>
            </div>
        )
    }

    return (
        renderContent()
    )
}

export default Expirience2
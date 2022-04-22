
import React, { useContext, useState } from 'react';
//import { useIntl } from 'react-intl';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart, FaBookMedical, FaCapsules, FaClipboardCheck } from 'react-icons/fa';
import {FiLogOut} from 'react-icons/fi'
//import sidebarBg from './assets/bg2.jpg';
import logo from '../assets/images/FinalLogo.png';
import UserContext from '../context/UserContext';


const NavBarRedo = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {

      const { setIsAuth } = useContext(UserContext);
      const { setUser } = useContext(UserContext);
      const { roles, setRoles } = useContext(UserContext);
      const [redirect , setRedirect]= useState(false); 
      const navigate = useNavigate();

      const logout = () =>{
       
        if (window.confirm('Are you sure you wish to logout?')){
            sessionStorage.removeItem("accessToken");
            sessionStorage.removeItem("user");
            setRedirect("true");
            setIsAuth("false");
            navigate('/');
        }else{
          return null
        }
        
      };

      return (
        
        <ProSidebar
          rtl={rtl}
          collapsed={collapsed}
          toggled={toggled}
          breakPoint="md"
          onToggle={handleToggleSidebar}
          style={{height: '110vh',color: 'white', background: '#A5A5A5', aover: 'black'}}
        >
          <SidebarHeader>
            <div
              style={{
                padding: '24px',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: 14,
                letterSpacing: '1px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              <img src={logo} height={100} width={150} style={{marginLeft: '30px'}}/>
            </div>
          </SidebarHeader>
    
          <SidebarContent>
            <Menu iconShape="circle">
              <MenuItem
                icon={<FaRegLaughWink />}
                title='Patient Selection'
              ><NavLink to='/patient-selection'></NavLink>
                  Patient Selection
              </MenuItem>
             {/* Patient Dashboard */} 
              <SubMenu
                suffix={<span className="badge yellow"></span>}
                title='Patient Dashboard'
                icon={<FaTachometerAlt />}
              >
                <MenuItem><NavLink to='/dashboard'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Dashboard</MenuItem>
                <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} History</MenuItem>
                <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Imaging</MenuItem>
                <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Labs</MenuItem>
                <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Care Plan</MenuItem>
              </SubMenu>

              {/* Vital Signs */} 
              <SubMenu
                suffix={<span className="badge yellow"></span>}
                title='Vital Signs'
                icon={<FaHeart />}
              >
                <MenuItem><NavLink to='/vitals'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Vitals</MenuItem>
                <MenuItem><NavLink to='/weight'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Weight</MenuItem>
                <MenuItem><NavLink to='/pain'></NavLink>{/*{intl.formatMessage({ id: 'submenu' })}*/} Pain</MenuItem>
                <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Input</MenuItem>
                <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Output</MenuItem>
              </SubMenu>

              {/* Patient Assessment */}
              <SubMenu title='Patient Assessment' icon={<FaBookMedical />}>
                <SubMenu title='Daily Care'>
                  <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Elimination </MenuItem>
                  <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Intake </MenuItem>
                  <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Hygiene </MenuItem>
                  <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Mobility </MenuItem>
                </SubMenu>
                <SubMenu title="General Head">
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Eye </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Ears, Nose, Oral </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Head </MenuItem>
                  </SubMenu>
                  <SubMenu title="Cardiovascular">
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Peripheral Perfusion </MenuItem>
                  </SubMenu>
                  <SubMenu title="Peripheral Pulse">
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Left Carotid </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Right Carotid </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Left Brachial </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Right Brachial </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Left Radial </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Right Radial </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Left Femoral </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Right Femoral </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Left Popliteal </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Right Popliteal </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Left Posterior </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Right Posterior </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Left Dorsalis </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Right Dorsalis </MenuItem>
                  </SubMenu>
                  <SubMenu title="Gastrointestinal">
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Gastrointestinal </MenuItem>
                  </SubMenu>
                  <SubMenu title="Genitourinary">
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Genitourinary </MenuItem>
                  </SubMenu>
                  <SubMenu title="Integumentary">
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Integumentary </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Integumentary Alterations </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Wound Location & Measurements </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Wound Info </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Dressing Change </MenuItem>
                  </SubMenu>
                  <SubMenu title="Musculoskeletal">
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Musculoskeletal </MenuItem>
                  </SubMenu>
                  <SubMenu title="Neurological">
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Mental </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Seizure Activity </MenuItem>
                  </SubMenu>
                  <MenuItem>Psychosocial</MenuItem>
                  <SubMenu title="Respiratory">
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Breathing Quality </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Oxygen </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Airways </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Notes & Interventions </MenuItem>
                  </SubMenu>
                  <SubMenu title="Safety">
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Level of Supervision </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Safety Interventions & Precautions </MenuItem>
                  </SubMenu>
                  <SubMenu title="Infection">
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Infection Control </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Infection Notes </MenuItem>
                  </SubMenu>
                  <SubMenu title="Vascular">
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Vascular Access </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Notes & Interventions </MenuItem>
                  </SubMenu>
                  <SubMenu title="Drains & Tubes">
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Drains & Tubes </MenuItem>
                    <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Notes & Interventions </MenuItem>
                  </SubMenu>
              </SubMenu>
              <MenuItem icon={<FaClipboardCheck />} title='test2'> Order Entry</MenuItem>
              <SubMenu
                suffix={<span className="badge yellow"></span>}
                title='Medication Administration'
                icon={<FaCapsules />}
              >
                <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Scheduled Meds</MenuItem>
                <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} PRN Meds</MenuItem>
                <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Continuous Meds</MenuItem>
                <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Respiratory Meds</MenuItem>
                <MenuItem>{/*{intl.formatMessage({ id: 'submenu' })}*/} Discontinued Meds</MenuItem>
              </SubMenu>
              <MenuItem icon={<FiLogOut />} ><a onClick={logout}>Logout</a></MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar> 
      );
    };

export default NavBarRedo;
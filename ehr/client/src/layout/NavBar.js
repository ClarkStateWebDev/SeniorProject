import React from 'react';
import { Navbar as HospitalRunNavbar} from '@hospitalrun/components'
import { Navigate } from 'react-router-dom';

class NavBar extends React.Component {
    constructor() {
      super();
      this.state = {
        name: "React",
        isUserAuthenticated: false,
        redirect: false
      };
    }

    checkLogin() {
      const isAuth = sessionStorage.getItem("accessToken");
      if(!isAuth){
          this.setState.isUserAuthenticated = false;
          let logoutButton = ''
      }else{
        this.setState.isUserAuthenticated = true;
        console.log("line 24")
        let logoutButton = {
          type: 'link',
          className: 'logout',
          label: 'Logout',
          onClick: () => { 
            if (window.confirm('Are you sure you wish to logout?')){
              this.logout()
            }  
          } 
        }
      }
    }

    componentDidMount() {
        this.checkLogin()
    }
    componentDidUpdate() {
      this.checkLogin()
  }
    logout(){
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("user");
      this.setState.isUserAuthenticated = false;
      this.setState({ redirect: true })
    };

    render() {
        if (this.state.redirect) {
          this.setState({ redirect: false });
          return <Navigate  to="/loggedOut" />;
        }
        const logoutButton = {
          type: 'link',
          className: 'logout',
          label: 'Logout',
          onClick: () => { 
            if (window.confirm('Are you sure you wish to logout?')){
              this.logout()
            }  
          } 
        }
        
        if(this.state.isUserAuthenticated){
          
          const logoutButton = {
            type: 'link',
            className: 'logout',
            label: 'Logout',
            onClick: () => { 
              if (window.confirm('Are you sure you wish to logout?')){
                this.logout()
              }  
            } 
          }
        } else {
          let logoutButton = ''
        }
        return (
             
                <HospitalRunNavbar
                  bg="dark"
                  variant="dark"
                  navItems={[
                    {
                      type: 'link-list-icon',
                      label: '',
                      name: 'menu',
                      size: 'lg',
                      iconClassName: 'align-bottom',
                      children: [
                        {
                          type: 'link',
                          label: 'Patient Dashboard',
                          href: '/dashboard',
                        },
                        {
                          type: 'link',
                          label: 'History',
                          href: '/history',
                        
                        },
                        {
                          type: 'link',
                          label: 'Imaging',
                         
                        },
                        {
                          type: 'link',
                          label: 'Labs',
                         
                        },
                        {
                          type: 'link',
                          label: 'Care Plan',
                         
                        },
                        {
                          type: 'link',
                          label: 'Order Entry',
                          dividerAbove: true,

                          
                        },
                        {
                          type: 'link',
                          label: 'Vitals',
                          dividerAbove: true,

                        },
                        {
                          type: 'link',
                          label: 'Weight',
                          
                        },
                        {
                          type: 'link',
                          label: 'Pain',
                          
                        },
                        {
                          type: 'link',
                          label: 'Input',
                         
                        },
                        {
                            type: 'link',
                            label: 'Output',
                           
                        },
                      ],
                    },
                    {
                      type: 'header',
                      label: 'Clark State EHR',
                      
                    },logoutButton
                  ]}
                />
                
              
        );
       
    }
}

export default NavBar;
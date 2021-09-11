import {Component} from 'react'

import './App.css'

import BrowserHistoryitems from './components/BrowserHistoryitems'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component {
  state = {finalhistroyitems: initialHistoryList, serachinput: ''}

  onchangeinput = event => this.setState({serachinput: event.target.value})

  deletedhistoryitem = id => {
    const {finalhistroyitems} = this.state
    const deleteitemsinlist = finalhistroyitems.filter(
      eachone => eachone.id !== id,
    )
    this.setState({finalhistroyitems: deleteitemsinlist})
  }

  render() {
    const {finalhistroyitems, serachinput} = this.state
    const Resulthistory = finalhistroyitems.filter(eachone =>
      eachone.title.toUpperCase().includes(serachinput.toUpperCase()),
    )
    console.log(Resulthistory.length)
    return (
      <div className="maincontainer">
        <div className="navbarcon">
          <div className="historyimgcon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              className="historyimg"
              alt="app logo"
            />
          </div>
          <div className="searchlogocontainer">
            <img
              className="searchlogo"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
          </div>
          <div className="searchcontainer">
            <input
              type="search"
              className="searchinput"
              placeholder="Search history"
              value={serachinput}
              onChange={this.onchangeinput}
            />
          </div>
        </div>
        <div className="browsermain-bg">
          {Resulthistory.length === 0 ? (
            <p className="msg">There is no history to show</p>
          ) : (
            <ul className="historylistitemcon">
              {Resulthistory.map(eachhistorylist => (
                <BrowserHistoryitems
                  eachhistorylist={eachhistorylist}
                  key={eachhistorylist.id}
                  deletedhistoryitem={this.deletedhistoryitem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App

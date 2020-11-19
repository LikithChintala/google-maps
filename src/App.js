import React, { Component } from "react";
import { compose, withProps } from "recompose"

import { withScriptjs, withGoogleMap, GoogleMap, Circle, Marker, InfoWindow } from "react-google-maps";
import './App.css'

export default class Mapa extends Component {
  constructor(props) {
    super(props)
    this.state = {
      markers: [

        { lat: 17.394811, lng: 78.439644,address:'12-6-11/4A to 4B, Above Godrej Interio, Pillar No. 15-16, Beside Reliance Digital, Near Kukatpally Metro Station, Kukatpally, Hyderabad, Telangana 500072', name: 'Dine inn china', imageurl: 'https://lh5.googleusercontent.com/p/AF1QipO1DUNPEu52KYC6zWwHFZBNWiFIXpqU52VndrYa=w408-h306-k-no' },
        { lat: 17.394406, lng: 78.440271,address:'Road, behind Rythu bazar, Vivekananda Colony, Santosh Nagar, Mehdipatnam, Hyderabad, Telangana 500001', name: 'Hotel city diamond', imageurl: 'https://lh5.googleusercontent.com/p/AF1QipO2EhheVMPUAfYRLQs9WymRpUC1Pw8u3o0VU-IR=w408-h305-k-no' },
        { lat: 17.396518, lng: 78.443213,address:' H No, 10/3/76, Mehdipatnam Rd, beside Mega Mart, Royal Colony, Humayun Nagar, Hyderabad, Telangana 500028', name: 'Mc Donalds', imageurl: 'https://lh5.googleusercontent.com/p/AF1QipOLlnBvahUF_0Ty7M43vHihyYyftJmMoLy0i5jt=w408-h296-k-no' },
        { lat: 17.395032, lng: 78.443271,address:'Shop No:42, Okaz Complex, Street Number 2, Royal Colony, Humayun Nagar, Hyderabad, Telangana 500028', name: 'Sauced Up', imageurl: 'https://lh5.googleusercontent.com/p/AF1QipN3iFhOs4zNIZV7_KPRmBapqg_ukFRtNnlDaHzu=w427-h240-k-no' },
        { lat: 17.393711, lng: 78.442333,address:' No. 12-2-831/1, Miraj Complex, Mehdipatnam X roads ,amba theatre road, behind subway restaurant, Hyderabad, Telangana 500028', name: 'Italian Pizzeria', imageurl: 'https://lh5.googleusercontent.com/p/AF1QipPU_j-OoaOs4jG9JiWKIkd90_0rEotmsv-Glnkv=w408-h306-k-no' },
        { lat: 17.389990, lng: 78.440808,address:'12-2-460/1/1 & 1/2, Gudi Malkapur Rd, Amba Gardens, Mehdipatnam, Hyderabad, Telangana 500264', name: 'Spice Den', imageurl: 'https://lh5.googleusercontent.com/p/AF1QipPgV6IgTg7pOUZRwhYM7S0thcxsdKTeSl3-EmlV=w408-h306-k-no' },
        { lat: 17.391643, lng: 78.442818,address:' Gudi Malkapur Rd, Amba Gardens, Mehdipatnam, Hyderabad, Telangana 500028', name: 'Arabia Cafe & Restaurant', imageurl: 'https://lh5.googleusercontent.com/p/AF1QipNu0pqU4tvWZBvf5PhA8V6Nf51dHE-Kp8IqFR5I=w408-h264-k-no' },
        { lat: 17.393478, lng: 78.439036,address:'24, Satya Sai Marg, Santosh Nagar, Mehdipatnam, Hyderabad, Telangana 500028', name: 'My crush', imageurl: 'https://lh5.googleusercontent.com/p/AF1QipOInSfLzBqIhGhHyZaax9xLxIy5dDR2JwzVZqTD=w408-h816-k-no' },
        { lat: 17.396693, lng: 78.442781,address:'Ground and First Floor, Door/MCH. No. 10-3, 76, Mehdipatnam Rd, Jyothi Nagar, Humayun Nagar, Hyderabad, Telangana 500028', name: 'Dominos Pizza', imageurl: 'https://lh5.googleusercontent.com/p/AF1QipORNUItzFRoOeZXYTcvW07Kq000BEeFqJuEJZ7V=w408-h306-k-no' },
        { lat: 17.395747, lng: 78.427999,address:' 500008, 12-2-720/22, Nanal Nagar Rd, Kakatiya Nagar, Toli Chowki, Hyderabad, Telangana 500008', name: 'Morine Bakery', imageurl: 'https://lh5.googleusercontent.com/p/AF1QipOu81QGSa8aLFdOGrfYPFENgIkfz0yA5QuOOdv0=w408-h408-k-no' },
        { lat: 17.389604, lng: 78.423555,address:'13-6/437/A/99/3, Langar House Rd, Indira Nagar, Mehdipatnam, Hyderabad, Telangana 500008', name: 'Grillistic bbq smoky House', imageurl: 'https://lh5.googleusercontent.com/p/AF1QipNaBKIF9Y3GkWBBNM2QjNHdy08YtqDGWvNavSFn=w480-h240-k-no' },

      ],
      isOpen: false,
      selectedMarker: ''
    }
  }



  onToggleOpen = (marker) => {
    // this.setState({ isOpen: !this.state.isOpen }, () => { this.selectedMarker(marker) })
    this.setState({ selectedMarker: marker })

  }
  selectedMarker = (marker) => {
    if (this.state.isOpen) {
      this.setState({ selectedMarker: '' })

    } else {
      this.setState({ selectedMarker: marker })
    }
  }

  render() {
    console.log('im markers', this.state.markers)
    const mapStyle = {
      height: '100vh',
      width: '100%',
    };

    const MapWithAMarker = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBxbKE6Fg3SzBEgS4e3zSAHk6rcwC9Rae4&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />
      }),
      withScriptjs,
      withGoogleMap
    )(props =>
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 17.394811, lng: 78.439644 }}
      >
        {props.markers.map(marker => (
          <Marker
            key={marker.name}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => { this.onToggleOpen(marker.name) }}
          >
            {console.log('this.state.selectedMarker', this.state.selectedMarker)}
            {
              this.state.selectedMarker == marker.name ? < InfoWindow onCloseClick={() => { this.onToggleOpen('') }}>
                <div>
                <img src={marker.imageurl} className="item__image"></img>
                <div className="list__item__name">{marker.name}</div>
                <p style={{maxWidth:'20vw'}}>Address : {marker.address}</p>
                <p style={{maxWidth:'20vw'}}>Latitude : {marker.lat}, Longitude : {marker.lng}</p>

                  {/* {marker.name} */}
                </div>

              </InfoWindow> : null}
          </Marker>
        ))
        }

      </GoogleMap>
    );

    let SelectedListItem = this.state.markers.find(element => element.name == this.state.selectedMarker)

    return (
      <section id="mapa">
        <div class="container">
          {/* <h3 class="info-title"><span class="info-title-span">Tasty and Convenient.</span></h3> */}

          <div class="row">
            <div class="col-md-12 text-left" style={mapStyle}>
              <div className="side-bar">
                {
                  this.state.selectedMarker !== '' ?
                    <div>
                      {
                        SelectedListItem !== undefined ?
                          <div>
                            <img src={SelectedListItem.imageurl} className="item__image"></img>
                            <div className="item__content">{SelectedListItem.name}

                            </div>
                            <p style={{maxWidth:'20vw',paddingLeft:'20px'}}><b>Address</b> : {SelectedListItem.address}</p>
                          </div>
                          :
                          null
                      }
                    </div>
                    :
                    <div>
                      {
                        this.state.markers.map((item) => {
                          return (
                            <div className="list__item" onClick={() => { this.onToggleOpen(item.name) }}                            >
                              <div className="list__item__name">{item.name}</div>
                              <img src={item.imageurl} className="list__item__image"></img>
                            </div>
                          )
                        })
                      }
                    </div>
                }
              </div>

              <MapWithAMarker markers={this.state.markers} />

            </div>
          </div>
        </div>
      </section>
    )
  }

}

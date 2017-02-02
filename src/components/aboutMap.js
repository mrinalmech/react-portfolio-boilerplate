import React from 'react'

//Components
import Wrapper from '../util/GoogleApiComponent'
import Map from './map'
import Marker from './marker'

export class AboutMap extends React.Component {

    render() {
        return (
            <div className="about-map">
                <Map google={this.props.google}>
                    <Marker/>
                </Map>
            </div>
        )
    }
}

export default Wrapper({apiKey: 'AIzaSyC319fzhXnCK9WwaKq6_7rQlWmcG_4Ki5g'})(AboutMap)

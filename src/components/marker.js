import React from 'react'

export default class Marker extends React.Component {

    componentDidUpdate(prevProps) {
        if (this.props.map !== prevProps.map) {
            this.renderMarker()
        }
    }

    renderMarker() {
        const {map, google} = this.props
        const lat = 19.067368
        const lng = 72.826241
        const position = new google.maps.LatLng(lat, lng)

        const pref = {
            map: map,
            position: position
        };
        this.marker = new google.maps.Marker(pref)
    }

    render() {
        return null;
    }
}

Marker.propTypes = {
    google: React.PropTypes.object,
    map: React.PropTypes.object
}

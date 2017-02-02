import React from 'react'
import ReactDOM from 'react-dom'

export default class Map extends React.Component {

    componentDidMount() {
        this.loadMap();
    }

    //Load map when Google API is available
    componentDidUpdate(prevProps) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
    }

    //For loading the map
    loadMap() {
        if (this.props && this.props.google) {
            const {google} = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            const zoom = 14;
            const lat = 19.067368;
            const lng = 72.826241;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            })
            this.map = new maps.Map(node, mapConfig);
            this.forceUpdate()

        }
    }

    //Rendering Children (Markers etc)
    renderChildren() {
        const {children} = this.props;

        if (!children)
            return;

        return React.Children.map(children, c => {
            return React.cloneElement(c, {
                map: this.map,
                google: this.props.google
            });
        })

    }

    render() {
        return (
            <div ref='map'>
                Loading map...{this.renderChildren()}
            </div>
        )
    }

}

Map.propTypes = {
    google: React.PropTypes.object
}

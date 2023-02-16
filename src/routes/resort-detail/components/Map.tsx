import GoogleMapReact from 'google-map-react';

const Map = (props: { resort: any }) => {
  const center = {
    lat: 35.14174858663305,
    lng: -79.62087783486577,
  };

  const zoom = 11

  const openMapModal = () => {
    console.log('open map modal');
  };

  const handleApiLoaded = (map: any, maps: any) => {
    // use map and maps objects
    console.log('map loaded');
    console.log(map, maps);
  }

  return (
    <>
      <section>
        <h2 className={'mb05'}>Where you'll stay</h2>
        <div onClick={openMapModal} style={{'height': '100vh'}} className={'map-container cursor-pointer'}>
          {/* <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            defaultCenter={center}
            defaultZoom={zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          /> */}
          {/* <GMapMap :center="{ lat: 35.14174858663305, lng: -79.62087783486577 }" :zoom="15" :options="{
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
          disableDefaultUi: false,
          draggable: false,
          clickableIcons: false,
        }" class="map">
        </GMapMap> */}
        </div>
        <hr />
        {/* <FullModalVue ref="MapModalRef">
        <template #body>
          <MapVue />
        </template>
      </FullModalVue> */}
      </section>
    </>
  );
};

export default Map;

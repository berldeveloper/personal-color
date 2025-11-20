import Map, { Location } from "@/components/Maps/MapBox"

const locations: Location[] = [
    {
      id: 1,
      name: "Mitra A",
      coordinates: [106.827153, -6.175392],
    },
    {
      id: 2,
      name: "Mitra B",
      coordinates: [106.800331, -6.21462],
    },
  ];

const ClosestPartner = () => {
    return (
        <>
            <div><h1>Mitra Terdekat</h1></div>

            <div>
                <Map locations={locations}/>
            </div>
        </>
    )
}

export default ClosestPartner
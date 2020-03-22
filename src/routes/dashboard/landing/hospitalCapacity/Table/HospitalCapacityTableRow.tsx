import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { IHospital } from 'src/services/hospitals';
import LocationIcon from 'src/components/Icons/LocationIcon';
import { IMapModalValues } from './HospitalCapacityTable';

export interface IHospitalCapacityTableRowProps {
  hospitalCapacity: IHospital;
  toggleMapsModal: (mapModalValues: IMapModalValues) => void;
}

const HospitalCapacityTableRow: FC<IHospitalCapacityTableRowProps> = props => {
  const history = useHistory();
  const {
    hospitalCapacity: {
      _id,
      name,
      location: address,
      mapLink: mapURL,
      contact,
      totalBeds,
      numIsolationBeds,
      icu,
      nameSlug
    },
    toggleMapsModal
  } = props;
  return (
    <>
      <tr onClick={() => history.push(`/hospital/${nameSlug}`)} style={{ cursor: 'pointer' }}>
        <td>
          <div>{name}</div>
        </td>
        <td>
          <div>{address}</div>
          <a
            className="pointer"
            onClick={event => {
              event.stopPropagation();
              toggleMapsModal({ title: name, mapURL });
            }}
          >
            <LocationIcon />
            <span className="ml-2">Map</span>
          </a>
        </td>
        <td>
          {contact ? (
            contact.map((number, index) => (index === contact.length - 1 ? `${number}` : `${number},`))
          ) : (
            <span>
              NA <small>(sourcing info)</small>
            </span>
          )}
        </td>

        <td>
          {totalBeds ? (
            totalBeds
          ) : (
            <span>
              NA <small>(sourcing info)</small>
            </span>
          )}
        </td>

        <td>
          {icu ? (
            icu
          ) : (
            <span>
              NA <small>(sourcing info)</small>
            </span>
          )}
        </td>

        <td>
          <span>
            NA <small>(sourcing info)</small>
          </span>
        </td>

        <td>
          {numIsolationBeds ? (
            numIsolationBeds
          ) : (
            <span>
              NA <small>(sourcing info)</small>
            </span>
          )}
        </td>
      </tr>
    </>
  );
};

export default HospitalCapacityTableRow;

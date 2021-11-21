import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loadSingleChar } from "../../redux/actions/charActions";

import DetailCard from "../../components/detailCard/DetailCard";

import { useParams } from "react-router-dom";

const Details = () => {
  let { id } = useParams();
  let dispatch = useDispatch();

  const { character } = useSelector((state) => state.data);

  useEffect(() => {
    try {
      dispatch(loadSingleChar(id));
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line
  }, []);

  return <DetailCard character={character} styleClass="one" />;
};

export default Details;

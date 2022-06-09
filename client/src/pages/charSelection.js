import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_HERO } from '../utils/queries';
import CharacterComp from '../components/characterComp';

// setTimeout(CharSelection, 2000);

function CharSelection() {

  const { loading, data } = useQuery(QUERY_HERO);

  const hero = data?.hero || [];

  console.log(hero)
  // console.log(hero[0])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <CharacterComp hero={hero} />
     
    </div>
  )
}

export default CharSelection
import React from 'react'

import { useWriteSurface} from '../../queue/surface.query'

export default function EarthlyDecorativeFrame() {

  const { data, error, fetchStatus } = useWriteSurface(null)

  if (error) return (<div> ERROR: {data['error']} </div>)
  if (data) {

    return (<div> {JSON.stringify(data)}</div>)
  }


}


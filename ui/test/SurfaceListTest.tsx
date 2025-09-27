import React from 'react'

import { useListSurface} from '../../queue/surface.query'

export default function EarthlyDecorativeFrame() {

  const { data, error, fetchStatus } = useListSurface()

  if (error) return (<div> ERROR: {data['error']} </div>)
  if (data) {

    return (<div> {JSON.stringify(data)}</div>)
  }


}


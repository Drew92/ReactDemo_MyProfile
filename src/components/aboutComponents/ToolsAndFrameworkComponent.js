import React from 'react'

export default function ToolsAndFrameworkComponent({name}) {
  return (
    <React.Fragment>
        <div class="w3-quarter w3-section">
            <span class="w3-xlarge">{name}</span><br/>
        </div>
    </React.Fragment>
  )
}

import React, { useState } from 'react'

export default function Click() {
    const [clr, setClr] = useState('#ccc');
    function tripleClick(e) {
        e.details === 3 && setClr('#ff0000')
    }
    return (
        <div>
            {tripleClick}
        </div>
    )
}

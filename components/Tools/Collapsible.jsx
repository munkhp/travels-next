import { useId } from 'react'
import BaseCollapsible from 'react-collapsible'

const Collapsible = (props) => {
    const id = useId()

    return (
        <BaseCollapsible
            {...props}
            contentElementId={`collapsible-content-${id}`}
            triggerElementProps={{
                ...props.triggerElementProps,
                id: `collapsible-trigger-${id}`,
            }}
        >{props.children}
        </BaseCollapsible>
    )
}
export default Collapsible;
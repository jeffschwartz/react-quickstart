/**
 * A semantic wrapper around bootstrap's css container-fluid
 */

const FluidContainer = ({children}) => (
    <div className="container-fluid">
        {children}
    </div>
);

export default FluidContainer;
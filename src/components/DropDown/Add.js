/**
 * Child component for DropDown to display options to add a page or category.
 * 
 * @param setModal Set's the modal to render in viewport
 */

function Add({ setModal }) {
    return (
        <div className="cancelClose">
            <p onClick={() => setModal("addPage")} className="dropItem">
                Add Page
            </p>
            <div className="divider cancelClose" />
            <p onClick={() => setModal("addCategory")} className="dropItem">
                Add Category
            </p>
        </div>
    );
}

export default Add;

export default function TabButton({children, onSelect, isSelected }){
console.log("Tab component executing")
    
    return(
        <li>
        <button className={isSelected ? 'active': undefined}  onClick={onSelect}>{children}</button>
        </li>
    );
}


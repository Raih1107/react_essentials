✅ Render Content conditionally


✅ CSS Styling ad Dynamic Styling
EX:
In tab button.jsx
<button className={isSelected ? 'active': undefined}  onClick={onSelect}>{children}</button>

<TabButton 
            isSelected={selectedTopic ==='components'} 
            onSelect={()=> handleSelect('components') }>Components</TabButton>


✅ Outputting List Data Dynamically
Used map mehtod to do so
EX: 
{CORE_CONCEPTS.map((conceptItem)=>(
          <CoreConcept {...conceptItem}></CoreConcept>
        ))}
const selectOptions = ["Zusammenarbeit", "Potenzialanalyse", "SEO-Coaching"];

const CustomeSelectDropdown = ({ setContactData, contactData }) => {
  return (
    <div className="custome_select_dropdown">
      {selectOptions.map((option) => (
        <p
          key={option}
          style={{ cursor: "pointer" }}
          onClick={() => setContactData({ ...contactData, form_type: option })}
        >
          {option}
        </p>
      ))}
    </div>
  );
};

export default CustomeSelectDropdown;

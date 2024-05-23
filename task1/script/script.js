const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },

  ];

  const people2 = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];
  
  const people3 = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];
  const teamProfile=document.querySelector('.team-profile_1');
  const teamProfile4=document.querySelector('.team-profile_4');
  const teamProfile5=document.querySelector('.team-profile_5');
  const teamProfile6=document.querySelector('.team-profile_6');
    people.forEach((person)=>{
        const personDiv=document.createElement('div');
        personDiv.classList.add('person');
        personDiv.innerHTML=`
        <img src=${person.image} alt=${person.name} class="team-image"/>
        <h3>${person.name}</h3>
        <p>${person.designation}</p>
        `;
        teamProfile.appendChild(personDiv);
    });

    const teamProfile2=document.querySelector('.team-profile_2');
   
    people2.forEach((person,index)=>{
      if(index<3)
        {
            const personDiv=document.createElement('div');
            personDiv.classList.add('person');
            personDiv.innerHTML=`
            <img src=${person.image} alt=${person.name} class="team-image"/>
            <h3>${person.name}</h3>
            <p>${person.designation}</p>
            `;
            teamProfile2.appendChild(personDiv);
        }
        else{
            return;
        }
    });

    const teamProfile3=document.querySelector('.team-profile_3');
   
    people3.forEach((person,index)=>{
      if(index<4)
        {
            const personDiv=document.createElement('div');
            personDiv.classList.add('person');
            personDiv.innerHTML=`
            <img src=${person.image} alt=${person.name} class="team-image"/>
            <h3>${person.name}</h3>
            <p>${person.designation}</p>
            `;
            teamProfile3.appendChild(personDiv);
          
        }
        else{
            return;
        }
    });
   
    people3.forEach((person,index)=>{
      if(index<3)
        {
            const personDiv=document.createElement('div');
            personDiv.classList.add('person');
            personDiv.innerHTML=`
            <img src=${person.image} alt=${person.name} class="team-image"/>
            <h3>${person.name}</h3>
            <p>${person.designation}</p>
            `;
            teamProfile4.appendChild(personDiv);
          

         
        }
        else{
            return;
        }
    });

    people3.forEach((person,index)=>{
        if(index<4)
          {
              const personDiv=document.createElement('div');
              personDiv.classList.add('person');
              personDiv.innerHTML=`
              <img src=${person.image} alt=${person.name} class="team-image"/>
              <h3>${person.name}</h3>
              <p>${person.designation}</p>
              `;
              teamProfile5.appendChild(personDiv);
          }
          else{
              return;
          }
      });
     
      people3.forEach((person,index)=>{
        if(index<3)
          {
              const personDiv=document.createElement('div');
              personDiv.classList.add('person');
              personDiv.innerHTML=`
              <img src=${person.image} alt=${person.name} class="team-image"/>
              <h3>${person.name}</h3>
              <p>${person.designation}</p>
              `;
             
              teamProfile6.appendChild(personDiv);
  
           
          }
          else{
              return;
          }
      });
  

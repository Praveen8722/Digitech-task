import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./components/ContactPage";
import DigiTech from "./components/DigiTech";
import UserCard from "./components/UserCard";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import CustomerTable from "./components/CustomerTable";
import Reviews from './components/Reviews'
import Cards from './components/Cards'
import ReviewForm from './components/ReviewForm';
import FeedbackTable from './components/FeedbackTable'



const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "16px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/contact" element={<ContactPage />} />
            <Route path="/digitech" element={<DigiTech />} />
            <Route path="/user-card" element={<UserCard />} /> */}
            <Route path="/customers" element={<CustomerTable />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/Cards" element={<Cards />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </div>
      </div>
    </Router>

    // <>
    // {/* <ReviewForm/> */}
    // <FeedbackTable/>
    // </>
  );
};

export default App;




// import React, { useState } from "react";
// import ReviewForm from "./components/ReviewForm";
// import FeedbackTable from "./components/FeedbackTable";

// function App() {
//   const [reviews, setReviews] = useState([
//     { id: 1, name: "zubair", mobile: "6300715871", review: "good", date: "3/12/2024" },
//     { id: 2, name: "Chandralekha S", mobile: "6383193711", review: "It's very bad", date: "3/12/2024" },
//     { id: 3, name: "Chanchala", mobile: "8240927328", review: "Worst company ever.", date: "3/12/2024" },
//     { id: 4, name: "Eswar", mobile: "8978974165", review: "Service not so good but atmosphere is great", date: "3/12/2024" }
//   ]);

//   const handleReviewSubmit = (newReview) => {
//     setReviews((prevReviews) => [
//       ...prevReviews,
//       { ...newReview, id: prevReviews.length + 1, date: new Date().toLocaleDateString() }
//     ]);
//   };

//   return (
//     <div>
//       <ReviewForm onSubmitReview={handleReviewSubmit} />
//       <FeedbackTable reviews={reviews} />
//     </div>
//   );
// }

// export default App;

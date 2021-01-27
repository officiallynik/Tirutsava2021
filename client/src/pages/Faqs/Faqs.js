import React, { useState } from "react";
import Header from "./Header";
import FAQ from "./Faq";
import "./Faqs.css";

const Faqs = () => {
	const [faqs, setfaqs] = useState([
		{
			open: false,
			question: "How do I register for Tirutsava?",
			answer: "You can register for Tirutsava by going to the Register page on our website www.tirutsava.com .",
		},
		{
			open: false,
			question: "What are the dates for Tirutsava 2021?",
			answer: "This edition of Tirutsava will be held from 25 February to 28 February 2021.",
		},
		{
			open: false,
			question: "Am I eligible to register for the events at Tirutsava 2021?",
			answer: "Any school/college student with a valid institute ID proof can register for events",
		},
		{
			open: false,
			question: "Are on-spot registrations allowed during the fest?",
			answer: "On-spot registrations are subject to the view of the event coordinators. We suggest registering online as soon as possible to avoid any unforeseen circumstances.",
		},
		{
			open: false,
			question: "Why should I give my information during registration?",
			answer: "We respect your privacy. The details you provide are collected only to keep you updated on the proceedings and enable a comfortable experience",
		},
		{
			open: false,
			question: "How can I buy passes for the pro shows?",
			answer: "You can buy passes to the pro-shows on our website homepage, which will be up very soon. Look out for some exciting offers!",
		},
		{
			open: false,
			question: "Am I eligible to attend the pro show?",
			answer: "Any person having the pass is eligible to attend the pro show",
		},
		{
			open: false,
			question: "Do I need to report at IIT Tirupati for any event?",
			answer: "No, Tirutsava 2021 is completely online",
		},
		
		{
			open: false,
			question: "Will I receive an e-receipt or confirmation after paying money for a particular event registration?",
			answer: " As soon as your payment is successful, you will be redirected to a page with “Payment Successful” in big, bold letters. We also suggest that you keep a screenshot of this page to avoid any discrepancies.",
		},
		{
			open: false,
			question: "Can I cancel my registration for a particular event and ask for a refund?",
			answer: "We don’t permit cancellation and refund for any event. In case of any issue, please contact the event coordinators. We will put in our best efforts to resolve your issue. ",
		},
		{
			open: false,
			question: "Can I purchase Tirutsava merchandise online?",
			answer: "Yes, you can purchase the official merchandise online. We also provide the option of home delivery.",
		},
		{
			open: false,
			question: "What happens if my internet connection is unstable during an event? Will my registration fee be refunded?",
			answer: " Please contact the event coordinator as early as possible. We will address the issues on a case-by-case basis.",
		},
		{
			open: false,
			question: "In case I face any technical issue just before an event, will someone else be allowed to participate on my behalf ?",
			answer: "Yes, this can be allowed if you inform the details of the substitute on time. We will also need a valid reason for your absence.",
		},
		{
			open: false,
			question: "Will I get a certificate for participation in competitions?",
			answer: "Winners and finalists of each event will get an online certificate after Tirutsava",
		},
		{
			open: false,
			question: "Whom should I contact in case of any discrepancy during an event?",
			answer: "Contact the event coordinator as soon as there is any problem",
		},
		{
			open: false,
			question: "Whom should I contact if I am unable to register or log into my account?",
			answer: "Contact the Web Development Team or any other person. You can find all the details of the members on the Contact Us page of the website",
		}		
	]);

	const [showfaqs] = useState(faqs);

	const toggleFAQ = index => {
		setfaqs(
			faqs.map((faq, i) => {
				if (i === index) {
					faq.open = !faq.open;
				} else {
					faq.open = false;
				}

				return faq;
			})
		);
	};
	const handleChange = e => {
		// Variable to hold the original version of the list
		let currentList = [];
		// Variable to hold the filtered list before putting into state
		let newList = [];

		// If the search bar isn't empty
		if (e.target.value !== "") {
			// Assign the original list to currentList
			currentList = showfaqs;

			// Use .filter() to determine which items should be displayed
			// based on the search terms

			newList = currentList.filter(item => {
				// change current item to lowercase
				const lc = item.question.toLowerCase();
				// change search term to lowercase
				const filter = e.target.value.toLowerCase();
				// check to see if the current list item includes the search term
				// If it does, it will be added to newList. Using lowercase eliminates
				// issues with capitalization in search terms and search content
				return lc.includes(filter);
			});
		} else {
			// If the search bar is empty, set newList to original task list
			newList = showfaqs;
		}
		// Set the filtered state based on what our rules added to newList

		setfaqs(newList);
	};

	// var currentMode = ((new Date()).getHours() < 18 &&
	// 	(new Date()).getHours() >= 6) ?
	// 	'day-mode' :
	// 	'night-mode';
	var currentMode = 'night-mode';

	return (
		<div className="faqs-screen">
			<div className={`bcgrnd ${currentMode}`}>
				<div style={{backgroundColor: "rgb(30, 21, 52)"}}>
					<Header handleChange={handleChange} />
				</div>

				<div className="faqs">
					{faqs.map((faq, i) => (
						<FAQ faq={faq} index={i} key={i} toggleFAQ={toggleFAQ} />
					))}
				</div>

				{faqs.length === 0? 
					<div>
						No Such FAQ Found
					</div>
					:
					null
				}

			</div>
		</div>
	);
};

export default Faqs;
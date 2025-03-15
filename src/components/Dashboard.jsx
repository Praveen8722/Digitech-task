import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  IconButton,
} from "@mui/material";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Data for Customer Insights Line Chart
  const customerInsightsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Customers",
        data: [0, 0, 0, 0, 0, 0, 0, 5, 15, 20, 10, 0],
        borderColor: "#3f51b5",
        backgroundColor: "rgba(63, 81, 181, 0.2)",
        fill: true,
      },
    ],
  };

  // Data for Feedback Trends Bar Chart
  const feedbackTrendsData = {
    labels: [
      "Today",
      "Yesterday",
      "This week",
      "Last month",
      "6 months",
      "Last Year",
    ],
    datasets: [
      {
        label: "Positive reviews",
        data: [0, 0, 0, 0, 0, 0, 1, 2],
        backgroundColor: "green",
      },
      {
        label: "Negative reviews",
        data: [1, 1, 2, 1, 0, 3, 1, 0],
        backgroundColor: "red",
        barThickness: 10, // Adjusting width of red bars
      },
    ],
  };

  // Options for Line Chart
  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: "top" },
    },
  };

  // Options for Feedback Trends Bar Chart
  const barChartOptions = {
    indexAxis: "y", // Horizontal bar chart
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: { display: false },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: { stepSize: 1 },
      },
      y: {
        ticks: {
          font: { size: 12 },
        },
      },
    },
  };

  return (
    <Box display="flex" sx={{mt:'2rem'}}>
      <Box flexGrow={1} p={2}>
        {/* Search Bar and Icons */}
        {/* <Box display="flex" alignItems="center" justifyContent="space-between" mb={4}>
          <TextField variant="standard" size="small" placeholder="Search..." fullWidth />
          <Box display="flex" alignItems="center">
            <IconButton>
              <PersonIcon />
            </IconButton>
            <IconButton>
              <ArrowDropDownIcon />
            </IconButton>
          </Box>
        </Box> */}

        {/* Summary Cards */}
        <Grid container spacing={2}>
          {["Total Customers", "Today's Total Customers", "Total Cards"].map((title, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="h4">{[26, 2, 1][index]}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Line Chart: Customer Insights */}
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Customer Insights
          </Typography>
          <Card>
            <CardContent>
              <Box sx={{ height: 300 }}>
                <Line data={customerInsightsData} options={lineChartOptions} />
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Bar Chart: Feedback Trends */}
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Feedback Trends
          </Typography>
          <Card
            sx={{
              width: "100%",
              marginTop: "20px",
              border: "1px solid #e0e0e0",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              backgroundColor: "#fdfdf7",
            }}
          >
            <CardContent>
              <Box sx={{ height: "25rem" }}>
                <Bar data={feedbackTrendsData} options={barChartOptions} />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

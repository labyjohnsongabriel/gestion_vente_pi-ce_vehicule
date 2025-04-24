import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { DataGrid } from "@mui/x-data-grid";
import { AccountCircle, ShoppingCart, AttachMoney } from "@mui/icons-material";

const Overview = () => {
  const theme = useTheme();

  const barChartData = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 4000 },
  ];

  const pieChartData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#1976d2", "#00C49F", "#FFBB28", "#FF8042"];

  const rows = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Sam Wilson", email: "sam@example.com", role: "Editor" },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "role", headerName: "Role", width: 130 },
  ];

  const metrics = [
    {
      title: "Total Users",
      value: "1,234",
      icon: <AccountCircle sx={{ fontSize: 50, color: "#1976d2" }} />,
    },
    {
      title: "Total Sales",
      value: "$45,678",
      icon: <ShoppingCart sx={{ fontSize: 50, color: "#388e3c" }} />,
    },
    {
      title: "Revenue",
      value: "$123,456",
      icon: <AttachMoney sx={{ fontSize: 50, color: "#f57c00" }} />,
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Dashboard Overview
      </Typography>

      {/* Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {metrics.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 4, boxShadow: 3, p: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Box display="flex" alignItems="center">
                  {item.icon}
                  <Typography variant="h3" ml={2}>
                    {item.value}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Charts */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ width:500,  height: 400, borderRadius: 4, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Sales Overview
              </Typography>
              <ResponsiveContainer width="100%" height="85%">
                <BarChart data={barChartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#1976d2" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{width:500, height: 400, borderRadius: 4, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                User Distribution
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                height="100%"
              >
                <ResponsiveContainer width="60%" height={250}>
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      innerRadius={40}
                      fill="#8884d8"
                      label
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>

                <Box width="35%">
                  {pieChartData.map((entry, index) => (
                    <Box
                      key={index}
                      display="flex"
                      alignItems="center"
                      mb={1}
                    >
                      <Box
                        sx={{
                          width: 14,
                          height: 14,
                          backgroundColor:
                            COLORS[index % COLORS.length],
                          borderRadius: "50%",
                          mr: 1,
                        }}
                      />
                      <Typography variant="body2">{entry.name}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* DataGrid */}
      <Box mt={5}>
        <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              User List
            </Typography>
            <Box sx={{ height: 350, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                sx={{
                  fontSize: 14,
                  borderRadius: 2,
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "#f0f0f0",
                    fontWeight: "bold",
                  },
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Overview;

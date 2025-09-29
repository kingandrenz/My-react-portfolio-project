

export defaul function Analytics () {
  const metrics = [
    
    {
      title: "Total sales",
      value: "$120,000",
      change: "+12%",
      isPositive: true,
    },
    {
      title: "Active Users",
      value: "1,200",
      change: "-8%",
      isPositive: false,
    },
    {
      title: "Website Visit",
      value: "8,50",
      change: "+5%",
      isPositive: true,
    },
    {
      title: "New Sign-Ups",
      value: "360",
      change: "+18%",
      isPositive: true,
    },
    ]
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Analytics Dashboard
          </h1>
          
          {/* Overview metrics section*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {,metrics?.map((metric,index)=>(
                <div key={index} className={`flex justify-between items-center bg-white rounded-lg shadow-md p-6 border-1-4 ${
                    metric.isPositive ?  "border-green-500" : "border-red-500"
                }`}>
                  <div className="">
                    <h3 className="text-xl font-semibold text-gray-700">{metric.title}</h3>
                    <p className="text-lg text-gray-600 mt-2">{metric.value}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm mt-2 ${metric.isPositive ? "text-green-600": "text-red-600"}`}>{metric.change}</p>
                  </div>
                </div>
              ))}
          </div>
          
          {/* Chart section: place chart here */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Website Trsffic
            </h2>
            
            <div className="bg-gray rounded-lg h-7×">Chart Placeholder</div>
          </div>
        </div>  
      </div>
      )
}
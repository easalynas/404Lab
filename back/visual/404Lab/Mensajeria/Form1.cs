using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using RabbitMQ.Client;
namespace Mensajeria
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            var factory = new ConnectionFactory();
            // "guest"/"guest" by default, limited to localhost connections
            //factory.Host = "fish - 01.rmq.cloudamqp.com";
            factory.HostName = "fish-01.rmq.cloudamqp.com";
            factory.VirtualHost = "dennlybi";
            factory.UserName = "dennlybi";
            factory.Password = "mldc9g-1XtG_l9gRox1UmJ7_lb_BWxno";
            //IConnection connection = factory.CreateConnection();
            using (var connection = factory.CreateConnection())
            using (var channel = connection.CreateModel())
            {
                channel.QueueDeclare(queue: "notificaciones", durable: false, exclusive: false, autoDelete: false, arguments: null);
                var body = Encoding.UTF8.GetBytes(txtResultado.Text);
               channel.BasicPublish(exchange: "", routingKey: "notificaciones", basicProperties: null, body: body);

            }

            txtResultado.Text = "";
        }

        private void button2_Click(object sender, EventArgs e)
        {
            ConnectionFactory factory = new ConnectionFactory();
            textBox2.Text = "";
            // "guest"/"guest" by default, limited to localhost connections
            //factory.Host = "fish - 01.rmq.cloudamqp.com";
            factory.HostName = "fish-01.rmq.cloudamqp.com";
            factory.VirtualHost = "dennlybi";
            factory.UserName = "dennlybi";
            factory.Password = "mldc9g-1XtG_l9gRox1UmJ7_lb_BWxno";
            IConnection connection = factory.CreateConnection();
            using (var channel = connection.CreateModel())
            {
                //channel.QueueDeclare(queue: "notificaciones", durable: false, exclusive: false, autoDelete: false, arguments: null);
                BasicGetResult consumer = channel.BasicGet("notificaciones", true);
                if (consumer != null)
                {
                    string resultado = Encoding.UTF8.GetString(consumer.Body.ToArray());
                    textBox2.Text = textBox2.Text + "\r\n" + "\n" + resultado;
                }
            }



        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }
    }
}

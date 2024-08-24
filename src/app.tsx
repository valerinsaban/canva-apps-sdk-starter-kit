import {
  Button,
  FormField,
  Rows,
  Select,
  Text,
  TextInput,
} from "@canva/app-ui-kit";
import { addNativeElement } from "@canva/design";
import styles from "styles/components.css";
import axios from "axios";

const params = {
  contacto: "",
  concepto: "Sitio Web (Catalogo)",
  empresa: "",
}

const response = await axios.get("https://api.kairosgt.com/empresas", {
  headers: {
    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJub21icmUiOiJLYWlyb3MiLCJhcGVsbGlkbyI6IkdUIiwiY29ycmVvIjoiaW5mb0BrYWlyb3NndC5jb20iLCJ1c3VhcmlvIjoiYWRtaW4iLCJjbGF2ZSI6InNoYTEkYjc3N2VhNzckMSRlNDE4YzYzMmZmZDAxNzMxNGFmYWIyZGEwMzRlODBlNzEwZDNhM2Q4IiwiYWNjZXNvIjoiMSIsInJvbF9pZCI6MSwiY3JlYXRlZEF0IjoiMjAyMy0xMi0xM1QxODozNTo0NS4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNC0wNS0yMlQxNzozMTozNS4wMDBaIn0sImlhdCI6MTcyNDQ2MTk0MSwiZXhwIjoxNzI0NTA1MTQxfQ.h8G_mVQek8keChrKl0sQQ5rQwoh0Dk_ZPPu4mbZnaXk",
  },
});

let empresas: any = [];
for (let i = 0; i < response.data.data.length; i++) {
  empresas.push({
    value: response.data.data[i].nombre,
    label: response.data.data[i].nombre
  });
}

export const App = () => {
  const onClick = async () => {
    addNativeElement({
      type: "TEXT",
      children: [params.empresa],
      top: 132,
      left: 155,
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      color: "#000000",
      width: 300,
      rotation: 0,
    });
  };

  return (
    <div className={styles.scrollContainer}>
      <Rows spacing="2u">
        <Text>
          Selecciona la empresa
        </Text>
        <FormField
          label="Form field label"          
          control={(props) => (
            <Select
              {...props} // <--- pass props down id, value and error to connect Select component to FormField
              options={empresas}
              onChange={(value) => {
                params.empresa = value;
              }}
            />
          )}
        />
        <Button variant="primary" onClick={onClick} stretch>
          Generar Cotizacion
        </Button>
      </Rows>
    </div>
  );
};

# Componente `Button`

El componente `Button` es un botón reutilizable para interfaces frontend. Soporta variantes de estilo y opcionalmente iconos. Está pensado para usarse en cualquier parte de la aplicación, siguiendo la arquitectura Atomic Design.

---

## 📌 Props

| Prop       | Tipo                        | Descripción                                                                 |
|------------|-----------------------------|-----------------------------------------------------------------------------|
| `variant`  | `"gradient"` \| `"outline"`| Define el estilo del botón: `"gradient"` para fondo degradado, `"outline"` para borde degradado. |
| `children` | `ReactNode`                | Contenido del botón (texto, iconos, etc.).                                |

---

## 🎨 Variantes de estilo

1. **Gradient:** Botón con fondo degradado.  
2. **Outline:** Botón con borde degradado y fondo transparente.

---

## ⚙️ Uso

### 1. Botón con fondo gradiente y con icono

```tsx
<div className="flex gap-[14px]">
  <Button variant="gradient">
    {slide.primaryButton.label}
    {slide.primaryButton.icon && (
      <img
        src={slide.primaryButton.icon}
        alt={slide.primaryButton.label}
        className="w-3 h-3"
      />
    )}
  </Button>
</div>



2. Botón con fondo gradiente sin icono
<Button variant="gradient">
  {slide.primaryButton.label}
</Button>

3. Botón con borde gradiente sin icono
{slide.secondaryButton && (
  <Button variant="outline">
    {slide.secondaryButton.label}
  </Button>
)}

📝 Ejemplo completo
<div className="flex gap-[14px]">
  <Button variant="gradient">
    {slide.primaryButton.label}
    {slide.primaryButton.icon && (
      <img
        src={slide.primaryButton.icon}
        alt={slide.primaryButton.label}
        className="w-3 h-3"
      />
    )}
  </Button>

  <Button variant="gradient">
    {slide.primaryButton.label}
  </Button>

  {slide.secondaryButton && (
    <Button variant="outline">
      {slide.secondaryButton.label}
    </Button>
  )}
</div>

📌 Notas

El prop variant controla el estilo del botón.

El icono es opcional y debe proporcionarse como URL en slide.primaryButton.icon.

El contenido del botón debe ir como children para mayor flexibilidad.

Se recomienda mantener consistencia en el uso de los estilos para una UI homogénea.